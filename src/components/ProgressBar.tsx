import React from 'react';
import { RoundResult } from '../types/game';

interface ProgressBarProps {
  currentRound: number; // 0-indexed
  totalRounds: number;
  roundResults: RoundResult[];
  deckIds: string[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentRound,
  totalRounds,
  roundResults,
  deckIds,
}) => {
  const displayRound = String(currentRound + 1).padStart(2, '0');
  const displayTotal = String(totalRounds).padStart(2, '0');
  const percentage = Math.min(100, ((currentRound + 1) / totalRounds) * 100);

  return (
    <div className="esc-progress-wrapper">
      <div className="esc-progress-top">
        <div className="esc-round-badge">
          <span className="esc-round-dot" />
          ROUND <strong>{displayRound}</strong> / {displayTotal}
        </div>
        <div className="esc-progress-steps" aria-label="Progreso por rondas">
          {deckIds.map((songId, idx) => {
            const res = roundResults.find((r) => r.songId === songId);
            let statusClass = 'pending';
            if (res) {
              statusClass = res.isCorrect ? 'correct' : 'wrong';
            } else if (idx === currentRound) {
              statusClass = 'active';
            }
            return (
              <span
                key={songId}
                className={`esc-step-pip ${statusClass}`}
                title={`Ronda ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
      <div className="esc-progress-track" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
        <div className="esc-progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};
