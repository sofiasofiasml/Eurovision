import React, { useState } from 'react';
import { Mic2, Volume2, VolumeX, RotateCcw, Trophy, Sparkles, Cake } from 'lucide-react';
import { GameScreen } from '../types/game';
import { audioEngine } from '../utils/audioEngine';

interface HeaderProps {
  screen: GameScreen;
  quizScore: number;
  medalUnlocked: boolean;
  onRestart: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  screen,
  quizScore,
  medalUnlocked,
  onRestart,
  onGoHome,
}) => {
  const [isMuted, setIsMuted] = useState(audioEngine.getMuted());

  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    audioEngine.setMuted(next);
  };

  const getPhaseLabel = () => {
    switch (screen) {
      case 'welcome':
        return 'GALA OFICIAL · BIENVENIDA';
      case 'guess':
        return 'FASE 1 · GUESS THE SONG';
      case 'voting':
        return 'FASE 2 · EUROVISION VOTING';
      case 'results':
        return 'GRAN FINAL · RESULTS & MEDAL';
    }
  };

  return (
    <header className="esc-header">
      <div className="esc-header-inner">
        <button
          type="button"
          className="esc-brand-btn"
          onClick={onGoHome}
          title="Volver a la portada de 12 POINTS"
        >
          <div className="esc-brand-badge">
            <span className="esc-brand-12">12</span>
            <Mic2 size={16} className="esc-brand-mic" />
          </div>
          <div className="esc-brand-text">
            <span className="esc-brand-title">12 POINTS</span>
            <span className="esc-brand-sub">
              <Cake size={11} /> CUMPLE DE IRINA
            </span>
          </div>
        </button>

        <div className="esc-phase-pill">
          <Sparkles size={14} className="esc-phase-icon" />
          <span>{getPhaseLabel()}</span>
        </div>

        <div className="esc-header-actions">
          {screen !== 'welcome' && (
            <div className="esc-score-chip" title="Puntuación musical acumulada">
              <Trophy size={15} className="esc-gold-icon" />
              <span>{quizScore}</span>
              <small>PTS</small>
            </div>
          )}

          {medalUnlocked && (
            <div className="esc-medal-mini-badge" title="Medalla 12 POINTS desbloqueada">
              🏅 <span>EXPERT</span>
            </div>
          )}

          <button
            type="button"
            className="esc-icon-btn"
            onClick={handleToggleMute}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
            title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {screen !== 'welcome' && (
            <button
              type="button"
              className="esc-icon-btn esc-restart-btn"
              onClick={onRestart}
              title="Reiniciar partida"
              aria-label="Reiniciar partida"
            >
              <RotateCcw size={17} />
              <span className="hide-mobile">Reiniciar</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
