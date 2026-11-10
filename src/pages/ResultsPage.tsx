import React from 'react';
import {
  Trophy,
  Crown,
  Sparkles,
  RotateCcw,
  Music,
  CheckCircle2,
  Percent,
  Heart,
} from 'lucide-react';
import {
  EurovisionSong,
  InternationalJury,
  SongStanding,
} from '../types/game';
import { ConfettiOverlay } from '../components/ConfettiOverlay';
import { Medal } from '../components/Medal';
import { ScoreBoard } from '../components/ScoreBoard';

interface ResultsPageProps {
  quizScore: number;
  correctCount: number;
  totalRounds: number;
  accuracyPercentage: number;
  finalStandings: SongStanding[];
  internationalJuries: InternationalJury[];
  irina12PointsSong: EurovisionSong | null;
  onPlayAgain: () => void;
  onChangeDifficulty: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({
  quizScore,
  correctCount,
  totalRounds,
  accuracyPercentage,
  finalStandings,
  internationalJuries,
  irina12PointsSong,
  onPlayAgain,
  onChangeDifficulty,
}) => {
  const winnerStanding = finalStandings[0];

  return (
    <section className="esc-results-page">
      <ConfettiOverlay active={true} count={65} />

      {/* Celebration Header */}
      <div className="esc-results-hero">
        <div className="esc-results-kicker">
          <Sparkles size={15} />
          <span>GRAN FINAL COMPLETADA · FELIZ CUMPLEAÑOS IRINA</span>
          <Sparkles size={15} />
        </div>
        <h1 className="esc-congrats-title">CONGRATULATIONS!</h1>
        <p className="esc-legend-subtitle">YOU ARE AN EUROVISION LEGEND!</p>
      </div>

      {/* Collectible Golden Medal Section */}
      <Medal
        quizScore={quizScore}
        correctCount={correctCount}
        totalRounds={totalRounds}
        winnerSongTitle={
          winnerStanding
            ? `${winnerStanding.song.title} – ${winnerStanding.song.artist}`
            : 'Eurovision Hit'
        }
        irina12SongTitle={
          irina12PointsSong
            ? `${irina12PointsSong.title} – ${irina12PointsSong.artist}`
            : '12 Points'
        }
      />

      {/* Quiz Performance Metrics */}
      <div className="esc-metrics-grid">
        <div className="esc-metric-card">
          <div className="esc-metric-icon gold">
            <Music size={22} />
          </div>
          <div>
            <span className="esc-metric-label">PUNTUACIÓN MUSICAL</span>
            <strong className="esc-metric-value">{quizScore} PTS</strong>
            <small>De 1.000 puntos posibles</small>
          </div>
        </div>

        <div className="esc-metric-card">
          <div className="esc-metric-icon cyan">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <span className="esc-metric-label">CANCIONES ACERTADAS</span>
            <strong className="esc-metric-value">
              {correctCount} / {totalRounds}
            </strong>
            <small>Fase Guess the Song</small>
          </div>
        </div>

        <div className="esc-metric-card">
          <div className="esc-metric-icon pink">
            <Percent size={22} />
          </div>
          <div>
            <span className="esc-metric-label">PORCENTAJE DE ACIERTO</span>
            <strong className="esc-metric-value">{accuracyPercentage}%</strong>
            <small>Nivel Eurofan demostrado</small>
          </div>
        </div>
      </div>

      {/* Winner Showcase: Gala Winner & Irina's 12 Points */}
      <div className="esc-winners-showcase">
        {winnerStanding && (
          <div className="esc-winner-banner gala-winner">
            <div className="esc-winner-badge">
              <Crown size={16} /> CANCIÓN GANADORA DE LA GALA (JURADO + IRINA)
            </div>
            <div className="esc-winner-content">
              <span className="esc-winner-flag">{winnerStanding.song.flag}</span>
              <div className="esc-winner-info">
                <h3>{winnerStanding.song.title}</h3>
                <p>
                  <strong>{winnerStanding.song.artist}</strong> · {winnerStanding.song.country} (
                  {winnerStanding.song.year})
                </p>
              </div>
              <div className="esc-winner-pts">
                <strong>{winnerStanding.totalPoints}</strong>
                <span>POINTS</span>
              </div>
            </div>
          </div>
        )}

        {irina12PointsSong && (
          <div className="esc-winner-banner irina-choice">
            <div className="esc-winner-badge pink">
              <Heart size={16} /> TUS «12 POINTS» PERSONALES DE CUMPLEAÑOS
            </div>
            <div className="esc-winner-content">
              <span className="esc-winner-flag">{irina12PointsSong.flag}</span>
              <div className="esc-winner-info">
                <h3>{irina12PointsSong.title}</h3>
                <p>
                  <strong>{irina12PointsSong.artist}</strong> · {irina12PointsSong.country} (
                  {irina12PointsSong.year})
                </p>
              </div>
              <div className="esc-winner-pts gold">
                <strong>12</strong>
                <span>POINTS</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Full Eurovision Scoreboard */}
      <ScoreBoard standings={finalStandings} juries={internationalJuries} />

      {/* Play Again Actions */}
      <div className="esc-results-footer-actions">
        <button type="button" className="esc-start-show-btn" onClick={onPlayAgain}>
          <RotateCcw size={20} />
          <span>PLAY AGAIN</span>
        </button>

        <button type="button" className="esc-secondary-btn" onClick={onChangeDifficulty}>
          <Trophy size={18} />
          <span>CAMBIAR DIFICULTAD / PORTADA</span>
        </button>
      </div>
    </section>
  );
};
