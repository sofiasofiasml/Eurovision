import React, { useState, useEffect, useMemo } from 'react';
import {
  Crown,
  Sparkles,
  Wand2,
  RotateCcw,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import {
  EurovisionPointValue,
  EUROVISION_POINTS,
  EurovisionSong,
  RoundResult,
} from '../types/game';
import { VotingCard } from '../components/VotingCard';
import { DocePuntosModal } from '../components/DocePuntosModal';
import { audioEngine } from '../utils/audioEngine';

interface VotingPageProps {
  songs: EurovisionSong[];
  userVotes: Record<string, EurovisionPointValue>;
  roundResults: RoundResult[];
  allVotesAssigned: boolean;
  twelvePointsSong: EurovisionSong | null;
  onAssignVote: (songId: string, points: EurovisionPointValue | null) => void;
  onAutoFillRemaining: () => void;
  onClearVotes: () => void;
  onCloseTwelveModal: () => void;
  onFinishVoting: () => void;
}

export const VotingPage: React.FC<VotingPageProps> = ({
  songs,
  userVotes,
  roundResults,
  allVotesAssigned,
  twelvePointsSong,
  onAssignVote,
  onAutoFillRemaining,
  onClearVotes,
  onCloseTwelveModal,
  onFinishVoting,
}) => {
  const [previewingSongId, setPreviewingSongId] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      audioEngine.stopSongIntro();
    };
  }, []);

  // Map of pointValue -> songId that currently holds it
  const usedPointsMap = useMemo(() => {
    const map: Record<number, string> = {};
    Object.entries(userVotes).forEach(([songId, pt]) => {
      map[pt] = songId;
    });
    return map;
  }, [userVotes]);

  const handleTogglePreview = async (song: EurovisionSong) => {
    if (previewingSongId === song.id) {
      audioEngine.stopSongIntro();
      setPreviewingSongId(null);
      return;
    }

    setPreviewingSongId(song.id);
    await audioEngine.playSongIntro(song, false, {
      onEnded: () => {
        setPreviewingSongId(null);
      },
    });
  };

  const assignedCount = Object.keys(userVotes).length;

  return (
    <section className="esc-voting-page">
      {/* Broadcast Header */}
      <div className="esc-voting-hero">
        <div className="esc-voting-kicker">
          <Sparkles size={15} />
          <span>EUROPE, START VOTING NOW! · JURADO OFICIAL DE IRINA</span>
        </div>
        <h1 className="esc-voting-main-title">AND NOW... THE VOTES!</h1>
        <p className="esc-voting-subtitle">
          Reparte los puntos clásicos de Eurovisión (<strong>1, 2, 3, 4, 5, 6, 7, 8, 10 y 12 puntos</strong>) entre
          las 10 canciones que han competido en tu gala. Cada puntuación es única.
        </p>

        {/* Live Points Bank Status */}
        <div className="esc-points-bank">
          <div className="esc-points-bank-top">
            <span>
              Puntos asignados: <strong>{assignedCount} / 10</strong>
            </span>
            <div className="esc-voting-quick-actions">
              {assignedCount < 10 && (
                <button
                  type="button"
                  className="esc-quick-btn"
                  onClick={onAutoFillRemaining}
                  title="Asignar automáticamente los puntos que faltan"
                >
                  <Wand2 size={14} />
                  <span>Auto-completar restantes</span>
                </button>
              )}
              {assignedCount > 0 && (
                <button
                  type="button"
                  className="esc-quick-btn esc-quick-clear"
                  onClick={onClearVotes}
                >
                  <RotateCcw size={14} />
                  <span>Borrar votos</span>
                </button>
              )}
            </div>
          </div>

          <div className="esc-bank-chips-row">
            {EUROVISION_POINTS.map((pt) => {
              const assignedSongId = usedPointsMap[pt];
              const assignedSong = songs.find((s) => s.id === assignedSongId);
              return (
                <div
                  key={pt}
                  className={`esc-bank-chip ${assignedSong ? 'used' : 'available'} ${
                    pt === 12 ? 'bank-12' : ''
                  }`}
                  title={
                    assignedSong
                      ? `${pt} puntos asignados a ${assignedSong.title}`
                      : `${pt} puntos disponibles para asignar`
                  }
                >
                  <strong>{pt}</strong>
                  <span>{assignedSong ? assignedSong.flag : 'Libre'}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Participating Songs Grid */}
      <div className="esc-voting-grid">
        {songs.map((song) => {
          const result = roundResults.find((r) => r.songId === song.id);
          return (
            <VotingCard
              key={song.id}
              song={song}
              assignedPoints={userVotes[song.id]}
              usedPointsMap={usedPointsMap}
              guessedCorrectly={Boolean(result?.isCorrect)}
              isPreviewPlaying={previewingSongId === song.id}
              onTogglePreview={handleTogglePreview}
              onAssignPoints={onAssignVote}
            />
          );
        })}
      </div>

      {/* Sticky / Bottom Submit Bar */}
      <div className="esc-voting-footer">
        <div className="esc-voting-footer-inner">
          <div className="esc-voting-status-msg">
            {allVotesAssigned ? (
              <span className="status-ready">
                <CheckCircle2 size={18} /> ¡Todos los puntos (1 a 12) están asignados! Lista para conocer a la ganadora.
              </span>
            ) : (
              <span>
                Faltan <strong>{10 - assignedCount}</strong> puntuaciones por asignar antes de cerrar las líneas.
              </span>
            )}
          </div>

          <button
            type="button"
            className="esc-primary-btn esc-finish-voting-btn"
            disabled={!allVotesAssigned}
            onClick={() => {
              audioEngine.stopSongIntro();
              onFinishVoting();
            }}
          >
            <Crown size={19} />
            <span>REVELAR GANADORA Y DESBLOQUEAR MEDALLA</span>
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      {/* Special 12 POINTS Celebration Modal */}
      <DocePuntosModal song={twelvePointsSong} onClose={onCloseTwelveModal} />
    </section>
  );
};
