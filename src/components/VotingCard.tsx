import React from 'react';
import { Play, Square, Crown, CheckCircle2, X } from 'lucide-react';
import {
  EurovisionPointValue,
  EUROVISION_POINTS,
  EurovisionSong,
} from '../types/game';

interface VotingCardProps {
  song: EurovisionSong;
  assignedPoints: EurovisionPointValue | undefined;
  usedPointsMap: Record<number, string>; // point -> songId
  guessedCorrectly: boolean;
  isPreviewPlaying: boolean;
  onTogglePreview: (song: EurovisionSong) => void;
  onAssignPoints: (songId: string, points: EurovisionPointValue | null) => void;
}

export const VotingCard: React.FC<VotingCardProps> = ({
  song,
  assignedPoints,
  usedPointsMap,
  guessedCorrectly,
  isPreviewPlaying,
  onTogglePreview,
  onAssignPoints,
}) => {
  const isTwelve = assignedPoints === 12;
  const isTenOrEight = assignedPoints === 10 || assignedPoints === 8;

  return (
    <div
      className={`esc-voting-card ${
        isTwelve ? 'has-12-points' : isTenOrEight ? 'has-high-points' : assignedPoints ? 'has-points' : ''
      }`}
    >
      <div className="esc-voting-card-top">
        <div className="esc-voting-song-info">
          <div className="esc-voting-flag-wrap">
            <span className="esc-voting-flag">{song.flag}</span>
          </div>
          <div className="esc-voting-meta">
            <div className="esc-voting-country-row">
              <span className="esc-voting-country">{song.country}</span>
              <span className="esc-voting-year">{song.year}</span>
              {guessedCorrectly && (
                <span className="esc-guessed-tag" title="¡Acertaste esta canción en la Fase 1!">
                  <CheckCircle2 size={12} /> Acertada
                </span>
              )}
            </div>
            <h3 className="esc-voting-title">{song.title}</h3>
            <p className="esc-voting-artist">{song.artist}</p>
          </div>
        </div>

        <div className="esc-voting-right-badge">
          <button
            type="button"
            className={`esc-mini-preview-btn ${isPreviewPlaying ? 'playing' : ''}`}
            onClick={() => onTogglePreview(song)}
            title={isPreviewPlaying ? 'Detener fragmento' : 'Escuchar recordatorio'}
          >
            {isPreviewPlaying ? <Square size={13} /> : <Play size={13} />}
            <span>{isPreviewPlaying ? 'Stop' : 'Oír'}</span>
          </button>

          {assignedPoints ? (
            <div className={`esc-assigned-score-badge ${isTwelve ? 'gold-12' : ''}`}>
              {isTwelve && <Crown size={14} />}
              <strong>{assignedPoints}</strong>
              <small>PTS</small>
              <button
                type="button"
                className="esc-unassign-mini-btn"
                onClick={() => onAssignPoints(song.id, null)}
                title="Quitar puntuación de esta canción"
                aria-label="Quitar puntuación"
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            <div className="esc-unassigned-badge">SIN PUNTOS</div>
          )}
        </div>
      </div>

      {/* Point selector buttons (1, 2, 3, 4, 5, 6, 7, 8, 10, 12) */}
      <div className="esc-voting-points-row" role="group" aria-label={`Puntos para ${song.title}`}>
        {EUROVISION_POINTS.map((pt) => {
          const isSelectedHere = assignedPoints === pt;
          const ownerSongId = usedPointsMap[pt];
          const isTakenByOther = Boolean(ownerSongId && ownerSongId !== song.id);

          return (
            <button
              key={pt}
              type="button"
              className={`esc-pt-chip ${pt === 12 ? 'pt-12' : pt === 10 ? 'pt-10' : ''} ${
                isSelectedHere ? 'selected' : ''
              } ${isTakenByOther ? 'taken' : ''}`}
              disabled={isTakenByOther}
              onClick={() => onAssignPoints(song.id, isSelectedHere ? null : pt)}
              title={
                isSelectedHere
                  ? `Quitar ${pt} puntos`
                  : isTakenByOther
                  ? `${pt} puntos ya están asignados a otra canción`
                  : `Dar ${pt} puntos a ${song.title}`
              }
            >
              {pt === 12 ? '★ 12' : pt}
            </button>
          );
        })}
      </div>
    </div>
  );
};
