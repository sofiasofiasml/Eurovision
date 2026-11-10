import React from 'react';
import { ChevronRight, Trophy, Sparkles } from 'lucide-react';
import { EurovisionSong, RoundResult } from '../types/game';
import { ProgressBar } from '../components/ProgressBar';
import { SongCard } from '../components/SongCard';
import { AnswerOption } from '../components/AnswerOption';

interface GuessSongPageProps {
  song: EurovisionSong;
  currentRoundIndex: number;
  totalRounds: number;
  deckIds: string[];
  roundResults: RoundResult[];
  playCount: number;
  potentialPoints: number;
  selectedAnswer: string | null;
  showHintsByDefault: boolean;
  onRegisterPlay: () => boolean;
  onSelectAnswer: (option: string) => void;
  onNextRound: () => void;
}

export const GuessSongPage: React.FC<GuessSongPageProps> = ({
  song,
  currentRoundIndex,
  totalRounds,
  deckIds,
  roundResults,
  playCount,
  potentialPoints,
  selectedAnswer,
  showHintsByDefault,
  onRegisterPlay,
  onSelectAnswer,
  onNextRound,
}) => {
  const isAnswered = selectedAnswer !== null;
  const isLastRound = currentRoundIndex === totalRounds - 1;

  return (
    <section className="esc-guess-page">
      <ProgressBar
        currentRound={currentRoundIndex}
        totalRounds={totalRounds}
        roundResults={roundResults}
        deckIds={deckIds}
      />

      <SongCard
        song={song}
        roundNumber={currentRoundIndex + 1}
        playCount={playCount}
        potentialPoints={potentialPoints}
        selectedAnswer={selectedAnswer}
        showHintsByDefault={showHintsByDefault}
        onRegisterPlay={onRegisterPlay}
      />

      {/* 4 Song Answer Options */}
      <div className="esc-answers-section">
        <div className="esc-answers-header">
          <Sparkles size={15} />
          <span>ELIGE LA CANCIÓN CORRECTA:</span>
        </div>

        <div className="esc-answers-grid">
          {song.options.map((option, idx) => (
            <AnswerOption
              key={option}
              option={option}
              index={idx}
              selectedAnswer={selectedAnswer}
              correctAnswer={song.correctAnswer}
              onSelect={onSelectAnswer}
            />
          ))}
        </div>
      </div>

      {/* NEXT SONG Button once answered */}
      {isAnswered && (
        <div className="esc-next-round-bar">
          <button type="button" className="esc-primary-btn esc-next-btn" onClick={onNextRound}>
            {isLastRound ? (
              <>
                <Trophy size={19} />
                <span>IR A LAS VOTACIONES (EUROVISION VOTING)</span>
                <ChevronRight size={19} />
              </>
            ) : (
              <>
                <span>NEXT SONG</span>
                <ChevronRight size={19} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};
