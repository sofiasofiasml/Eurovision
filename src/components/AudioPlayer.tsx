import React, { useState, useEffect } from 'react';
import { Play, Square, Radio, Disc3, Sparkles, Headphones } from 'lucide-react';
import { EurovisionSong } from '../types/game';
import { audioEngine } from '../utils/audioEngine';

interface AudioPlayerProps {
  song: EurovisionSong;
  playCount: number;
  maxPlays?: number;
  isAnswered: boolean;
  potentialPoints: number;
  onRegisterPlay: () => boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  song,
  playCount,
  maxPlays = 3,
  isAnswered,
  potentialPoints,
  onRegisterPlay,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [totalSec, setTotalSec] = useState(10);
  const [loadError, setLoadError] = useState(false);

  // Stop audio cleanly when changing song round or when answered
  useEffect(() => {
    audioEngine.stopSongIntro();
    setIsPlaying(false);
    setIsLoading(false);
    setProgress(0);
    setElapsedSec(0);
    setLoadError(false);
    return () => {
      audioEngine.stopSongIntro();
    };
  }, [song.id]);

  useEffect(() => {
    if (isAnswered && isPlaying) {
      audioEngine.stopSongIntro();
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, [isAnswered, isPlaying]);

  const handleTogglePlay = async () => {
    if (isPlaying || isLoading) {
      audioEngine.stopSongIntro();
      setIsPlaying(false);
      setIsLoading(false);
      return;
    }

    if (playCount >= maxPlays && !isAnswered) {
      return;
    }

    if (!isAnswered) {
      const allowed = onRegisterPlay();
      if (!allowed) return;
    }

    setLoadError(false);
    setIsLoading(true);
    setIsPlaying(true);
    setProgress(0);
    setElapsedSec(0);

    await audioEngine.playSongIntro(song, false, {
      onProgress: (pct, elapsed, total) => {
        setIsLoading(false);
        setProgress(pct);
        setElapsedSec(elapsed);
        setTotalSec(total);
      },
      onEnded: () => {
        setIsPlaying(false);
        setIsLoading(false);
        setProgress(100);
      },
      onError: () => {
        setIsLoading(false);
        setIsPlaying(false);
        setLoadError(true);
      },
    });

    setIsLoading(false);
  };

  const playsLeft = Math.max(0, maxPlays - playCount);
  const canPlay = isPlaying || isAnswered || playCount < maxPlays;

  const formatSec = (s: number) => {
    const whole = Math.floor(s);
    const tenths = Math.floor((s - whole) * 10);
    return `${String(whole).padStart(2, '0')}.${tenths}s`;
  };

  return (
    <div className={`esc-audio-player ${isPlaying ? 'playing' : ''}`}>
      <div className="esc-audio-top-row">
        <div className="esc-attempts-pill">
          <Headphones size={14} />
          <span>
            Escuchas: <strong>{playCount}</strong> / {maxPlays}
          </span>
          {!isAnswered && (
            <span className="esc-points-stake">
              <Sparkles size={12} /> Vale <strong>{potentialPoints} PTS</strong>
            </span>
          )}
        </div>

        <div className="esc-synth-toggle">
          <Radio size={13} />
          <span>Audio Original Eurovisión</span>
        </div>
      </div>

      {/* Animated Soundwave Visualizer */}
      <div className="esc-soundwave-stage" aria-hidden="true">
        <div className={`esc-vinyl-disc ${isPlaying ? 'spinning' : ''}`}>
          <Disc3 size={34} />
        </div>
        <div className="esc-wave-bars">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={`esc-wave-bar ${isPlaying ? 'animating' : ''}`}
              style={{
                animationDelay: `${(i % 8) * 0.09}s`,
                height: isPlaying ? undefined : `${18 + ((i * 11) % 35)}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar & Timer */}
      <div className="esc-audio-timeline">
        <div className="esc-audio-track">
          <div className="esc-audio-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="esc-audio-time-labels">
          <span>
            {loadError
              ? '⚠️ No se pudo cargar el audio. Comprueba tu conexión y vuelve a pulsar PLAY.'
              : isLoading
              ? 'Cargando grabación original...'
              : isPlaying
              ? '🎵 Reproduciendo grabación original de Eurovisión...'
              : playCount === 0
              ? 'Pulsa PLAY INTRO para escuchar el fragmento original'
              : playsLeft > 0
              ? `Te quedan ${playsLeft} ${playsLeft === 1 ? 'escucha disponible' : 'escuchas disponibles'}`
              : 'Has agotado las 3 escuchas · ¡Elige tu respuesta!'}
          </span>
          <span className="esc-audio-clock">
            {formatSec(elapsedSec)} / {formatSec(totalSec)}
          </span>
        </div>
      </div>

      {/* Main PLAY INTRO CTA */}
      <div className="esc-audio-controls">
        <button
          type="button"
          className={`esc-play-intro-btn ${isPlaying ? 'is-playing' : ''}`}
          onClick={handleTogglePlay}
          disabled={!canPlay}
        >
          {isPlaying ? (
            <>
              <Square size={18} />
              <span>STOP INTRO</span>
            </>
          ) : (
            <>
              <Play size={18} />
              <span>
                {playCount === 0
                  ? 'PLAY INTRO'
                  : isAnswered
                  ? 'VOLVER A ESCUCHAR'
                  : playsLeft > 0
                  ? `PLAY INTRO (${playsLeft} RESTANTES)`
                  : 'SIN ESCUCHAS RESTANTES'}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
