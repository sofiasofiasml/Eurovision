import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  DifficultyLevel,
  EurovisionPointValue,
  EUROVISION_POINTS,
  EurovisionSong,
  GameState,
  SavedStats,
  SongStanding,
} from '../types/game';
import {
  EUROVISION_SONGS,
  buildMatchDeck,
  generateInternationalJuries,
} from '../data/songs';
import { audioEngine } from '../utils/audioEngine';

const GAME_STATE_STORAGE_KEY = 'eurovision_12points_irina_state_v2';
const SAVED_STATS_STORAGE_KEY = 'eurovision_12points_irina_stats_v1';

const DEFAULT_STATS: SavedStats = {
  gamesCompleted: 0,
  bestQuizScore: 0,
  medalUnlocked: false,
};

function createInitialGameState(
  difficulty: DifficultyLevel = 'mixed',
  showHintsByDefault = true
): GameState {
  const deck = buildMatchDeck(difficulty);
  return {
    screen: 'welcome',
    difficulty,
    showHintsByDefault,
    deckIds: deck.map((s) => s.id),
    currentRoundIndex: 0,
    currentPlayCount: 0,
    selectedAnswer: null,
    roundResults: [],
    quizScore: 0,
    userVotes: {},
    internationalJuries: generateInternationalJuries(deck),
    hasSeen12PointsCelebration: false,
  };
}

export function useGame() {
  const [deckCache, setDeckCache] = useState<Record<string, EurovisionSong>>(() => {
    const map: Record<string, EurovisionSong> = {};
    EUROVISION_SONGS.forEach((song) => {
      map[song.id] = song;
    });
    return map;
  });

  const [gameState, setGameState] = useState<GameState>(() => {
    try {
      const raw = localStorage.getItem(GAME_STATE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as GameState;
        if (
          parsed &&
          Array.isArray(parsed.deckIds) &&
          parsed.deckIds.length === 10 &&
          parsed.deckIds.every((id) => EUROVISION_SONGS.some((s) => s.id === id))
        ) {
          return parsed;
        }
      }
    } catch {
      // Ignore corrupt localStorage
    }
    return createInitialGameState('mixed', true);
  });

  const [savedStats, setSavedStats] = useState<SavedStats>(() => {
    try {
      const raw = localStorage.getItem(SAVED_STATS_STORAGE_KEY);
      if (raw) {
        return { ...DEFAULT_STATS, ...(JSON.parse(raw) as SavedStats) };
      }
    } catch {
      // Ignore
    }
    return DEFAULT_STATS;
  });

  // Modal state for the special 12 POINTS celebration
  const [twelvePointsSong, setTwelvePointsSong] = useState<EurovisionSong | null>(null);
  // Stage transition curtain between rounds/screens
  const [stageTransitioning, setStageTransitioning] = useState(false);

  // Persist gameState to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(GAME_STATE_STORAGE_KEY, JSON.stringify(gameState));
    } catch {
      // Ignore quota errors
    }
  }, [gameState]);

  // Persist savedStats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SAVED_STATS_STORAGE_KEY, JSON.stringify(savedStats));
    } catch {
      // Ignore quota errors
    }
  }, [savedStats]);

  // Participating 10 songs for this match
  const matchSongs: EurovisionSong[] = useMemo(() => {
    return gameState.deckIds
      .map((id) => deckCache[id] || EUROVISION_SONGS.find((s) => s.id === id))
      .filter((s): s is EurovisionSong => Boolean(s));
  }, [gameState.deckIds, deckCache]);

  const currentSong: EurovisionSong = useMemo(() => {
    return matchSongs[gameState.currentRoundIndex] || matchSongs[0] || EUROVISION_SONGS[0];
  }, [matchSongs, gameState.currentRoundIndex]);

  const setDifficulty = useCallback((difficulty: DifficultyLevel) => {
    setGameState((prev) => ({
      ...prev,
      difficulty,
    }));
  }, []);

  const setShowHintsByDefault = useCallback((showHintsByDefault: boolean) => {
    setGameState((prev) => ({
      ...prev,
      showHintsByDefault,
    }));
  }, []);

  const triggerStageTransition = useCallback((callback: () => void) => {
    setStageTransitioning(true);
    window.setTimeout(() => {
      callback();
      window.setTimeout(() => {
        setStageTransitioning(false);
      }, 280);
    }, 240);
  }, []);

  /**
   * Starts a fresh 10-round game with the chosen difficulty
   */
  const startNewGame = useCallback(
    (difficultyOverride?: DifficultyLevel) => {
      audioEngine.stopSongIntro();
      audioEngine.playStageIntroFanfare();

      const chosenDifficulty = difficultyOverride ?? gameState.difficulty;
      const freshDeck = buildMatchDeck(chosenDifficulty);

      // Update deckCache with shuffled options
      setDeckCache((prev) => {
        const next = { ...prev };
        freshDeck.forEach((song) => {
          next[song.id] = song;
        });
        return next;
      });

      triggerStageTransition(() => {
        setGameState({
          screen: 'guess',
          difficulty: chosenDifficulty,
          showHintsByDefault: gameState.showHintsByDefault,
          deckIds: freshDeck.map((s) => s.id),
          currentRoundIndex: 0,
          currentPlayCount: 0,
          selectedAnswer: null,
          roundResults: [],
          quizScore: 0,
          userVotes: {},
          internationalJuries: generateInternationalJuries(freshDeck),
          hasSeen12PointsCelebration: false,
        });
      });
    },
    [gameState.difficulty, gameState.showHintsByDefault, triggerStageTransition]
  );

  /**
   * Increments play count (max 3 per round)
   */
  const registerIntroPlay = useCallback((): boolean => {
    if (gameState.currentPlayCount >= 3 || gameState.selectedAnswer !== null) {
      return false;
    }
    setGameState((prev) => ({
      ...prev,
      currentPlayCount: Math.min(3, prev.currentPlayCount + 1),
    }));
    return true;
  }, [gameState.currentPlayCount, gameState.selectedAnswer]);

  /**
   * Calculates points for the current attempt:
   * 1st listen -> 100 pts
   * 2nd listen -> 75 pts
   * 3rd listen -> 50 pts
   */
  const potentialRoundPoints = useMemo(() => {
    if (gameState.currentPlayCount <= 1) return 100;
    if (gameState.currentPlayCount === 2) return 75;
    return 50;
  }, [gameState.currentPlayCount]);

  /**
   * Submits an answer for the current song
   */
  const selectAnswer = useCallback(
    (option: string) => {
      if (gameState.selectedAnswer !== null) return;

      audioEngine.stopSongIntro();

      const isCorrect = option === currentSong.correctAnswer;
      const attemptsUsed = Math.max(1, gameState.currentPlayCount);
      let pointsEarned = 0;

      if (isCorrect) {
        if (attemptsUsed === 1) pointsEarned = 100;
        else if (attemptsUsed === 2) pointsEarned = 75;
        else pointsEarned = 50;
        audioEngine.playCorrectSound();
      } else {
        audioEngine.playWrongSound();
      }

      setGameState((prev) => {
        const existingFiltered = prev.roundResults.filter((r) => r.songId !== currentSong.id);
        const updatedResults = [
          ...existingFiltered,
          {
            songId: currentSong.id,
            selectedOption: option,
            isCorrect,
            attemptsUsed,
            pointsEarned,
          },
        ];
        const totalScore = updatedResults.reduce((acc, r) => acc + r.pointsEarned, 0);

        return {
          ...prev,
          selectedAnswer: option,
          roundResults: updatedResults,
          quizScore: totalScore,
        };
      });
    },
    [gameState.selectedAnswer, gameState.currentPlayCount, currentSong]
  );

  /**
   * Advances to the next song round or to the Eurovision Voting phase after Round 10
   */
  const nextRound = useCallback(() => {
    audioEngine.stopSongIntro();

    if (gameState.currentRoundIndex < matchSongs.length - 1) {
      triggerStageTransition(() => {
        setGameState((prev) => ({
          ...prev,
          currentRoundIndex: prev.currentRoundIndex + 1,
          currentPlayCount: 0,
          selectedAnswer: null,
        }));
      });
    } else {
      audioEngine.playStageIntroFanfare();
      triggerStageTransition(() => {
        setGameState((prev) => ({
          ...prev,
          screen: 'voting',
        }));
      });
    }
  }, [gameState.currentRoundIndex, matchSongs.length, triggerStageTransition]);

  /**
   * Assigns a Eurovision point value (1, 2, 3, 4, 5, 6, 7, 8, 10, 12) to a participating song.
   * Enforces uniqueness:
   * - Only songs in the current match can receive points.
   * - Each point value can only be assigned to one song at a time.
   * - Clicking the already-assigned point on the same song unassigns it.
   */
  const assignVote = useCallback(
    (songId: string, points: EurovisionPointValue | null) => {
      const targetSong = matchSongs.find((s) => s.id === songId);
      if (!targetSong) return;

      setGameState((prev) => {
        const nextVotes = { ...prev.userVotes };

        if (points === null || nextVotes[songId] === points) {
          delete nextVotes[songId];
          return {
            ...prev,
            userVotes: nextVotes,
          };
        }

        // Remove this point value from any other song that previously held it
        Object.keys(nextVotes).forEach((otherSongId) => {
          if (nextVotes[otherSongId] === points) {
            delete nextVotes[otherSongId];
          }
        });

        nextVotes[songId] = points;

        return {
          ...prev,
          userVotes: nextVotes,
          hasSeen12PointsCelebration: points === 12 ? true : prev.hasSeen12PointsCelebration,
        };
      });

      if (points === 12) {
        audioEngine.playDocePuntosFanfare();
        setTwelvePointsSong(targetSong);
      } else if (points !== null) {
        audioEngine.playPointAssignSound(points);
      }
    },
    [matchSongs]
  );

  const clearAllVotes = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      userVotes: {},
    }));
  }, []);

  /**
   * Quick helper to auto-assign any remaining unassigned points to songs without points
   */
  const autoFillRemainingVotes = useCallback(() => {
    const usedPoints = new Set(Object.values(gameState.userVotes));
    const availablePoints = EUROVISION_POINTS.filter((p) => !usedPoints.has(p));
    const unvotedSongs = matchSongs.filter((s) => !gameState.userVotes[s.id]);

    if (availablePoints.length === 0 || unvotedSongs.length === 0) return;

    const nextVotes = { ...gameState.userVotes };
    let songGetting12: EurovisionSong | null = null;

    unvotedSongs.forEach((song, idx) => {
      const pt = availablePoints[idx];
      if (pt !== undefined) {
        nextVotes[song.id] = pt;
        if (pt === 12) {
          songGetting12 = song;
        }
      }
    });

    setGameState((prev) => ({
      ...prev,
      userVotes: nextVotes,
      hasSeen12PointsCelebration: true,
    }));

    if (songGetting12) {
      audioEngine.playDocePuntosFanfare();
      setTwelvePointsSong(songGetting12);
    } else {
      audioEngine.playPointAssignSound(10);
    }
  }, [gameState.userVotes, matchSongs]);

  const closeTwelvePointsModal = useCallback(() => {
    setTwelvePointsSong(null);
  }, []);

  /**
   * Checks if all 10 Eurovision point values (1..12) have been assigned
   */
  const allVotesAssigned = useMemo(() => {
    const assignedValues = Object.values(gameState.userVotes);
    if (assignedValues.length !== EUROVISION_POINTS.length) return false;
    return EUROVISION_POINTS.every((pt) => assignedValues.includes(pt));
  }, [gameState.userVotes]);

  /**
   * Finalizes the voting phase and unlocks the Eurovision Expert Medal!
   */
  const finishVoting = useCallback(() => {
    if (!allVotesAssigned) return;

    audioEngine.playDocePuntosFanfare();

    // Calculate winner to store in stats
    const standings = matchSongs
      .map((song) => {
        const irinaPts = gameState.userVotes[song.id] || 0;
        const juryPts = gameState.internationalJuries.reduce(
          (sum, jury) => sum + (jury.votes[song.id] || 0),
          0
        );
        return {
          song,
          totalPoints: irinaPts + juryPts,
        };
      })
      .sort((a, b) => b.totalPoints - a.totalPoints);

    const winnerTitle = standings[0]
      ? `${standings[0].song.title} (${standings[0].song.artist})`
      : undefined;

    setSavedStats((prev) => ({
      gamesCompleted: prev.gamesCompleted + 1,
      bestQuizScore: Math.max(prev.bestQuizScore, gameState.quizScore),
      medalUnlocked: true,
      unlockedAt: prev.unlockedAt || new Date().toISOString(),
      lastWinnerSong: winnerTitle,
    }));

    triggerStageTransition(() => {
      setGameState((prev) => ({
        ...prev,
        screen: 'results',
      }));
    });
  }, [
    allVotesAssigned,
    matchSongs,
    gameState.userVotes,
    gameState.internationalJuries,
    gameState.quizScore,
    triggerStageTransition,
  ]);

  /**
   * Resets to Welcome screen so the user can change difficulty or play again
   */
  const goToWelcome = useCallback(() => {
    audioEngine.stopSongIntro();
    triggerStageTransition(() => {
      setGameState((prev) => ({
        ...prev,
        screen: 'welcome',
      }));
    });
  }, [triggerStageTransition]);

  /**
   * Final standings combining Irina's votes + International Juries
   */
  const finalStandings: SongStanding[] = useMemo(() => {
    return matchSongs
      .map((song) => {
        const irinaPoints = gameState.userVotes[song.id] || 0;
        const juryPoints = gameState.internationalJuries.reduce(
          (sum, jury) => sum + (jury.votes[song.id] || 0),
          0
        );
        const roundResult = gameState.roundResults.find((r) => r.songId === song.id);
        return {
          song,
          irinaPoints,
          juryPoints,
          totalPoints: irinaPoints + juryPoints,
          guessedCorrectly: Boolean(roundResult?.isCorrect),
        };
      })
      .sort((a, b) => {
        if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
        return b.irinaPoints - a.irinaPoints;
      });
  }, [matchSongs, gameState.userVotes, gameState.internationalJuries, gameState.roundResults]);

  const correctAnswersCount = useMemo(() => {
    return gameState.roundResults.filter((r) => r.isCorrect).length;
  }, [gameState.roundResults]);

  const accuracyPercentage = useMemo(() => {
    if (matchSongs.length === 0) return 0;
    return Math.round((correctAnswersCount / matchSongs.length) * 100);
  }, [correctAnswersCount, matchSongs.length]);

  const irina12PointsSong = useMemo(() => {
    const songId = Object.keys(gameState.userVotes).find(
      (id) => gameState.userVotes[id] === 12
    );
    return matchSongs.find((s) => s.id === songId) || null;
  }, [gameState.userVotes, matchSongs]);

  return {
    gameState,
    savedStats,
    matchSongs,
    currentSong,
    potentialRoundPoints,
    allVotesAssigned,
    finalStandings,
    correctAnswersCount,
    accuracyPercentage,
    irina12PointsSong,
    twelvePointsSong,
    stageTransitioning,
    setDifficulty,
    setShowHintsByDefault,
    startNewGame,
    registerIntroPlay,
    selectAnswer,
    nextRound,
    assignVote,
    clearAllVotes,
    autoFillRemainingVotes,
    closeTwelvePointsModal,
    finishVoting,
    goToWelcome,
  };
}
