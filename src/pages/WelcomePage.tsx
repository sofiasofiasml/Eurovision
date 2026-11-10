import React from 'react';
import {
  Play,
  Sparkles,
  Trophy,
  Flame,
  Crown,
  Music,
  Award,
  Eye,
  Cake,
  Star,
} from 'lucide-react';
import { DifficultyLevel, SavedStats } from '../types/game';

interface WelcomePageProps {
  difficulty: DifficultyLevel;
  showHintsByDefault: boolean;
  savedStats: SavedStats;
  onSelectDifficulty: (diff: DifficultyLevel) => void;
  onToggleHints: (show: boolean) => void;
  onStartGame: () => void;
}

const DIFFICULTY_OPTIONS: Array<{
  id: DifficultyLevel;
  label: string;
  tag: string;
  desc: string;
  icon: React.ReactNode;
}> = [
  {
    id: 'easy',
    label: 'Fácil · Grandes Himnos',
    tag: 'POPULAR',
    desc: 'Chanel, Loreen, ABBA, Rosa López, Måneskin, Massiel... Los mayores temazos de la historia.',
    icon: <Star size={18} />,
  },
  {
    id: 'mixed',
    label: 'Mixta · Gala Completa',
    tag: 'RECOMENDADO',
    desc: 'Equilibrio ideal de clásicos míticos, himnos recientes (Käärijä, Nebulossa, Nemo, Beth) y favoritos.',
    icon: <Flame size={18} />,
  },
  {
    id: 'expert',
    label: 'Experta · Eurofan Nivel Dios',
    tag: 'EXPERT',
    desc: 'Joyas de distintas décadas, iconos de culto (Pastora Soler, Mocedades, Salomé, Baby Lasagna, Go_A).',
    icon: <Crown size={18} />,
  },
];

export const WelcomePage: React.FC<WelcomePageProps> = ({
  difficulty,
  showHintsByDefault,
  savedStats,
  onSelectDifficulty,
  onToggleHints,
  onStartGame,
}) => {
  return (
    <section className="esc-welcome-page">
      <div className="esc-hero-card">
        {/* Birthday Special Edition Ribbon */}
        <div className="esc-birthday-pill">
          <Cake size={15} />
          <span>EDICIÓN ESPECIAL CUMPLEAÑOS DE IRINA · LIVE EUROVISION SHOW</span>
          <Sparkles size={15} />
        </div>

        {/* Stage Illustration with Spotlights & Microphone */}
        <div className="esc-stage-illustration" aria-hidden="true">
          <svg
            viewBox="0 0 600 220"
            className="esc-stage-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="beamBlue" x1="0%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#263BFF" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#263BFF" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beamPink" x1="100%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FF3FA4" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#FF3FA4" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="beamCyan" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#27E5D5" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#27E5D5" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="archNeon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#263BFF" />
                <stop offset="50%" stopColor="#FF3FA4" />
                <stop offset="100%" stopColor="#27E5D5" />
              </linearGradient>
              <radialGradient id="stageFloor" cx="50%" cy="85%" r="50%">
                <stop offset="0%" stopColor="#873EFF" stopOpacity="0.55" />
                <stop offset="60%" stopColor="#263BFF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#080B2A" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Spotlight cones */}
            <polygon points="80,0 210,200 340,200" fill="url(#beamBlue)" className="svg-beam-1" />
            <polygon points="520,0 260,200 390,200" fill="url(#beamPink)" className="svg-beam-2" />
            <polygon points="300,0 220,200 380,200" fill="url(#beamCyan)" className="svg-beam-3" />

            {/* Stage concentric neon arches */}
            <path
              d="M 110 190 A 190 155 0 0 1 490 190"
              fill="none"
              stroke="url(#archNeon)"
              strokeWidth="4"
              strokeOpacity="0.8"
            />
            <path
              d="M 150 190 A 150 120 0 0 1 450 190"
              fill="none"
              stroke="#FFD166"
              strokeWidth="2"
              strokeDasharray="8 6"
              strokeOpacity="0.65"
            />

            {/* Stage glowing floor */}
            <ellipse cx="300" cy="192" rx="230" ry="24" fill="url(#stageFloor)" />
            <ellipse
              cx="300"
              cy="192"
              rx="165"
              ry="14"
              fill="none"
              stroke="#27E5D5"
              strokeWidth="2"
              strokeOpacity="0.7"
            />

            {/* Equalizer bars behind center mic */}
            {[210, 228, 246, 264, 282, 318, 336, 354, 372, 390].map((x, idx) => {
              const h = 25 + ((idx * 17) % 45);
              return (
                <rect
                  key={x}
                  x={x - 4}
                  y={180 - h}
                  width="8"
                  height={h}
                  rx="4"
                  fill={idx % 2 === 0 ? '#FF3FA4' : '#27E5D5'}
                  opacity="0.75"
                />
              );
            })}

            {/* Crystal Trophy / Microphone Centerpiece */}
            <circle cx="300" cy="105" r="34" fill="#FFD166" fillOpacity="0.16" />
            <circle cx="300" cy="105" r="22" fill="#FFD166" />
            <rect x="294" y="126" width="12" height="44" rx="6" fill="#FFFFFF" />
            <path d="M 275 178 L 325 178" stroke="#FFD166" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Main Title Logo */}
        <div className="esc-logo-block">
          <div className="esc-logo-12-row">
            <span className="esc-giant-12">12</span>
            <div className="esc-logo-words">
              <h1 className="esc-main-title">POINTS</h1>
              <span className="esc-challenge-tag">EUROVISION CHALLENGE</span>
            </div>
          </div>
          <p className="esc-subtitle">HOW WELL DO YOU KNOW EUROVISION?</p>
        </div>

        <p className="esc-intro-copy">
          «¿Reconoces una canción de Eurovisión con solo escuchar sus primeros segundos? Demuéstralo,{' '}
          <strong>Irina</strong>, reparte tus puntos en la Gran Final y consigue tus{' '}
          <span className="text-gold">12 Points</span>.»
        </p>

        {/* How to Play 3-step summary */}
        <div className="esc-phases-preview">
          <div className="esc-phase-mini-card">
            <Music size={18} className="icon-cyan" />
            <div>
              <strong>1. Guess the Song</strong>
              <span>10 rondas escuchando la intro (100, 75 o 50 pts).</span>
            </div>
          </div>
          <div className="esc-phase-mini-card">
            <Trophy size={18} className="icon-pink" />
            <div>
              <strong>2. Eurovision Voting</strong>
              <span>Reparte tus 1 a 12 puntos junto al Jurado Internacional.</span>
            </div>
          </div>
          <div className="esc-phase-mini-card">
            <Award size={18} className="icon-gold" />
            <div>
              <strong>3. Medalla Coleccionable</strong>
              <span>Desbloquea y descarga tu medalla 12 POINTS Expert.</span>
            </div>
          </div>
        </div>

        {/* Difficulty Selector */}
        <div className="esc-config-section">
          <label className="esc-config-label">
            ELIGE EL NIVEL MUSICAL DE LA GALA:
          </label>
          <div className="esc-difficulty-grid">
            {DIFFICULTY_OPTIONS.map((opt) => {
              const active = difficulty === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  className={`esc-diff-card ${active ? 'selected' : ''}`}
                  onClick={() => onSelectDifficulty(opt.id)}
                >
                  <div className="esc-diff-top">
                    <span className="esc-diff-icon">{opt.icon}</span>
                    <span className="esc-diff-tag">{opt.tag}</span>
                  </div>
                  <strong>{opt.label}</strong>
                  <p>{opt.desc}</p>
                </button>
              );
            })}
          </div>

          <div className="esc-hint-pref-row">
            <label className="esc-checkbox-label">
              <input
                type="checkbox"
                checked={showHintsByDefault}
                onChange={(e) => onToggleHints(e.target.checked)}
              />
              <Eye size={15} />
              <span>Mostrar bandera del país y año como pista visual en cada ronda</span>
            </label>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="esc-hero-cta-wrap">
          <button type="button" className="esc-start-show-btn" onClick={onStartGame}>
            <Play size={22} fill="currentColor" />
            <span>START THE SHOW</span>
          </button>
        </div>

        {/* Previous Stats / Unlocked Medal Strip */}
        {savedStats.gamesCompleted > 0 && (
          <div className="esc-saved-stats-bar">
            <span>
              🏅 Galas completadas: <strong>{savedStats.gamesCompleted}</strong>
            </span>
            <span>
              🎵 Mejor puntuación: <strong>{savedStats.bestQuizScore} PTS</strong>
            </span>
            {savedStats.medalUnlocked && (
              <span className="esc-unlocked-pill">
                ★ Medalla Eurovision Expert Desbloqueada
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
