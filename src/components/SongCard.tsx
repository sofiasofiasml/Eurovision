import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Sparkles, CheckCircle2, XCircle, Globe, HelpCircle } from 'lucide-react';
import { EurovisionSong } from '../types/game';
import { AudioPlayer } from './AudioPlayer';

interface SongCardProps {
  song: EurovisionSong;
  roundNumber: number;
  playCount: number;
  potentialPoints: number;
  selectedAnswer: string | null;
  showHintsByDefault: boolean;
  onRegisterPlay: () => boolean;
}

export const SongCard: React.FC<SongCardProps> = ({
  song,
  roundNumber,
  playCount,
  potentialPoints,
  selectedAnswer,
  showHintsByDefault,
  onRegisterPlay,
}) => {
  const [showClues, setShowClues] = useState(showHintsByDefault);
  const [showExtraHint, setShowExtraHint] = useState(false);

  useEffect(() => {
    setShowClues(showHintsByDefault);
    setShowExtraHint(false);
  }, [song.id, showHintsByDefault]);

  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === song.correctAnswer;

  return (
    <div
      className={`esc-song-card ${
        isAnswered ? (isCorrect ? 'answered-correct' : 'answered-wrong') : ''
      }`}
    >
      {/* Stage Top Header */}
      <div className="esc-song-card-header">
        <div className="esc-stage-spotlight-tag">
          <Sparkles size={14} />
          <span>ESCENARIO EUROVISIÓN · CANCIÓN #{String(roundNumber).padStart(2, '0')}</span>
        </div>

        <div className="esc-clue-badges">
          {showClues || isAnswered ? (
            <>
              <span className="esc-country-pill" title={`País participante: ${song.country}`}>
                <span className="esc-flag-emoji">{song.flag}</span>
                <strong>{song.country}</strong>
              </span>
              <span className="esc-year-pill">{song.year}</span>
            </>
          ) : (
            <button
              type="button"
              className="esc-reveal-clue-btn"
              onClick={() => setShowClues(true)}
            >
              <Eye size={14} />
              <span>Mostrar País y Año</span>
            </button>
          )}

          {showClues && !isAnswered && (
            <button
              type="button"
              className="esc-hide-clue-btn"
              onClick={() => setShowClues(false)}
              title="Ocultar pista de país y año"
            >
              <EyeOff size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Audio Player */}
      <AudioPlayer
        song={song}
        playCount={playCount}
        isAnswered={isAnswered}
        potentialPoints={potentialPoints}
        onRegisterPlay={onRegisterPlay}
      />

      {/* Optional Hint Toggle before answering */}
      {!isAnswered && (
        <div className="esc-hint-section">
          {!showExtraHint ? (
            <button
              type="button"
              className="esc-hint-btn"
              onClick={() => setShowExtraHint(true)}
            >
              <HelpCircle size={14} />
              <span>¿Necesitas una pista eurovisiva, Irina?</span>
            </button>
          ) : (
            <div className="esc-hint-box">
              <Globe size={15} className="esc-hint-icon" />
              <p>{song.optionalHint}</p>
            </div>
          )}
        </div>
      )}

      {/* Feedback Banner when answered */}
      {isAnswered && (
        <div className={`esc-feedback-banner ${isCorrect ? 'correct' : 'wrong'}`}>
          <div className="esc-feedback-status">
            {isCorrect ? (
              <>
                <CheckCircle2 size={26} className="esc-feedback-icon" />
                <div>
                  <h3>CORRECT! 🎉</h3>
                  <p>
                    ¡Brillante, Irina! Has sumado{' '}
                    <strong>
                      +{playCount <= 1 ? 100 : playCount === 2 ? 75 : 50} PUNTOS
                    </strong>{' '}
                    en esta actuación.
                  </p>
                </div>
              </>
            ) : (
              <>
                <XCircle size={26} className="esc-feedback-icon" />
                <div>
                  <h3>NOT QUITE! ✨</h3>
                  <p>
                    La canción correcta era <strong>{song.correctAnswer}</strong> (0 puntos).
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="esc-song-reveal-details">
            <div className="esc-song-reveal-main">
              <span className="esc-reveal-flag">{song.flag}</span>
              <div>
                <h4>{song.title}</h4>
                <p>
                  <strong>{song.artist}</strong> · {song.country} ({song.year})
                </p>
              </div>
            </div>
            <p className="esc-song-funfact">{song.funFact}</p>
          </div>
        </div>
      )}
    </div>
  );
};
