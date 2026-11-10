import React from 'react';
import { Crown, Sparkles, PartyPopper, Check } from 'lucide-react';
import { EurovisionSong } from '../types/game';
import { ConfettiOverlay } from './ConfettiOverlay';

interface DocePuntosModalProps {
  song: EurovisionSong | null;
  onClose: () => void;
}

export const DocePuntosModal: React.FC<DocePuntosModalProps> = ({ song, onClose }) => {
  if (!song) return null;

  return (
    <div className="esc-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="doce-puntos-title">
      <ConfettiOverlay active={true} count={70} />
      <div className="esc-doce-modal">
        <div className="esc-doce-glow-ring" />

        <div className="esc-doce-spokesperson">
          <Sparkles size={15} />
          <span>CONEXIÓN EN DIRECTO CON EL JURADO DE IRINA</span>
        </div>

        <div className="esc-doce-giant-badge">
          <Crown size={30} className="esc-doce-crown" />
          <span className="esc-doce-number">12</span>
          <span className="esc-doce-pts-label">POINTS</span>
        </div>

        <h2 id="doce-puntos-title" className="esc-doce-headline">
          ¡DOCE PUNTOS! 🇪🇸
        </h2>

        <div className="esc-doce-broadcast-call">
          «{song.country.toUpperCase()}... 12 POINTS!»
        </div>

        <div className="esc-doce-song-showcase">
          <span className="esc-doce-flag">{song.flag}</span>
          <div className="esc-doce-song-text">
            <h3>{song.title}</h3>
            <p>
              <strong>{song.artist}</strong> · {song.country} ({song.year})
            </p>
          </div>
        </div>

        <p className="esc-doce-quote">
          <PartyPopper size={16} /> ¡Tus míticos <strong>12 Points</strong> de cumpleaños ya tienen dueña!
        </p>

        <button type="button" className="esc-primary-btn esc-doce-close-btn" onClick={onClose}>
          <Check size={18} />
          <span>CONTINUAR EN LA GALA DE VOTACIÓN</span>
        </button>
      </div>
    </div>
  );
};
