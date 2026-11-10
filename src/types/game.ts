export type DifficultyLevel = 'easy' | 'mixed' | 'expert';

export type GameScreen = 'welcome' | 'guess' | 'voting' | 'results';

export type EurovisionPointValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12;

export const EUROVISION_POINTS: EurovisionPointValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

export interface SynthNote {
  /** Frequency in Hz (0 for rest) */
  freq: number;
  /** Duration in beats */
  beats: number;
}

export interface SynthMelody {
  bpm: number;
  wave: OscillatorType;
  bassFreq?: number;
  notes: SynthNote[];
}

export interface EurovisionSong {
  id: string;
  title: string;
  artist: string;
  country: string;
  countryCode: string;
  flag: string;
  year: number;
  audioUrl: string;
  correctAnswer: string;
  options: string[];
  optionalHint: string;
  difficulty: DifficultyLevel;
  itunesTrackId: number;
  itunesQuery: string;
  funFact: string;
  synthMelody: SynthMelody;
}

export interface RoundResult {
  songId: string;
  selectedOption: string;
  isCorrect: boolean;
  attemptsUsed: number;
  pointsEarned: number;
}

export interface InternationalJury {
  country: string;
  countryCode: string;
  flag: string;
  spokesperson: string;
  greeting: string;
  votes: Record<string, EurovisionPointValue>; // songId -> points
}

export interface SongStanding {
  song: EurovisionSong;
  irinaPoints: EurovisionPointValue | 0;
  juryPoints: number;
  totalPoints: number;
  guessedCorrectly: boolean;
}

export interface SavedStats {
  gamesCompleted: number;
  bestQuizScore: number;
  medalUnlocked: boolean;
  unlockedAt?: string;
  lastWinnerSong?: string;
}

export interface GameState {
  screen: GameScreen;
  difficulty: DifficultyLevel;
  showHintsByDefault: boolean;
  deckIds: string[];
  currentRoundIndex: number;
  currentPlayCount: number;
  selectedAnswer: string | null;
  roundResults: RoundResult[];
  quizScore: number;
  /** Map of songId -> EurovisionPointValue assigned by Irina */
  userVotes: Record<string, EurovisionPointValue>;
  /** Simulated international jury votes for the 10 participating songs */
  internationalJuries: InternationalJury[];
  hasSeen12PointsCelebration: boolean;
}
