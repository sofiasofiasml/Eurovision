import React, { useState } from 'react';
import { Trophy, Crown, Globe, Heart, CheckCircle2 } from 'lucide-react';
import { InternationalJury, SongStanding } from '../types/game';

interface ScoreBoardProps {
  standings: SongStanding[];
  juries: InternationalJury[];
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ standings, juries }) => {
  const [activeTab, setActiveTab] = useState<'combined' | 'irina' | 'juries'>('combined');

  const irinaSorted = [...standings].sort((a, b) => b.irinaPoints - a.irinaPoints);

  return (
    <div className="esc-scoreboard-card">
      <div className="esc-scoreboard-header">
        <div>
          <span className="esc-section-kicker">OFFICIAL EUROVISION SCOREBOARD</span>
          <h3 className="esc-scoreboard-title">
            <Trophy size={22} className="esc-gold-icon" /> CLASIFICACIÓN FINAL DE LA GALA
          </h3>
        </div>

        <div className="esc-scoreboard-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'combined'}
            className={`esc-tab-btn ${activeTab === 'combined' ? 'active' : ''}`}
            onClick={() => setActiveTab('combined')}
          >
            <Trophy size={14} />
            <span>Total (Jurado + Irina)</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'irina'}
            className={`esc-tab-btn ${activeTab === 'irina' ? 'active' : ''}`}
            onClick={() => setActiveTab('irina')}
          >
            <Heart size={14} />
            <span>Votos de Irina (1-12)</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'juries'}
            className={`esc-tab-btn ${activeTab === 'juries' ? 'active' : ''}`}
            onClick={() => setActiveTab('juries')}
          >
            <Globe size={14} />
            <span>Jurado Internacional</span>
          </button>
        </div>
      </div>

      {activeTab !== 'juries' ? (
        <div className="esc-scoreboard-list">
          {(activeTab === 'combined' ? standings : irinaSorted).map((item, idx) => {
            const rank = idx + 1;
            const isWinner = rank === 1;
            const isIrina12 = item.irinaPoints === 12;

            return (
              <div
                key={item.song.id}
                className={`esc-scoreboard-row ${isWinner ? 'rank-1' : rank <= 3 ? 'rank-podium' : ''}`}
              >
                <div className="esc-sb-left">
                  <span className={`esc-sb-rank ${isWinner ? 'gold' : ''}`}>
                    {isWinner ? <Crown size={15} /> : String(rank).padStart(2, '0')}
                  </span>
                  <span className="esc-sb-flag">{item.song.flag}</span>
                  <div className="esc-sb-song">
                    <div className="esc-sb-song-title-line">
                      <strong>{item.song.title}</strong>
                      {isIrina12 && (
                        <span className="esc-sb-irina12-pill">★ 12 PTS DE IRINA</span>
                      )}
                      {item.guessedCorrectly && (
                        <span className="esc-sb-guessed-icon" title="Acertada en Guess the Song">
                          <CheckCircle2 size={13} />
                        </span>
                      )}
                    </div>
                    <span className="esc-sb-artist">
                      {item.song.artist} · {item.song.country} ({item.song.year})
                    </span>
                  </div>
                </div>

                <div className="esc-sb-right">
                  {activeTab === 'combined' && (
                    <div className="esc-sb-subpoints">
                      <span title="Puntos del Jurado Internacional">Jurado: {item.juryPoints}</span>
                      <span className="esc-sb-irina-sub" title="Puntos otorgados por Irina">
                        Irina: +{item.irinaPoints}
                      </span>
                    </div>
                  )}
                  <div className="esc-sb-total-box">
                    {activeTab === 'combined' ? item.totalPoints : item.irinaPoints}
                    <small>PTS</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="esc-juries-grid">
          {juries.map((jury) => {
            const topEntry = standings.find((s) => jury.votes[s.song.id] === 12);
            const tenEntry = standings.find((s) => jury.votes[s.song.id] === 10);
            const eightEntry = standings.find((s) => jury.votes[s.song.id] === 8);

            return (
              <div key={jury.countryCode} className="esc-jury-card">
                <div className="esc-jury-card-top">
                  <span className="esc-jury-flag">{jury.flag}</span>
                  <div>
                    <h4>{jury.country}</h4>
                    <small>Portavoz: {jury.spokesperson}</small>
                  </div>
                </div>
                <p className="esc-jury-greeting">«{jury.greeting}»</p>
                <div className="esc-jury-top3">
                  {topEntry && (
                    <div className="esc-jury-vote-line gold">
                      <span>★ 12 PTS</span>
                      <strong>
                        {topEntry.song.flag} {topEntry.song.title}
                      </strong>
                    </div>
                  )}
                  {tenEntry && (
                    <div className="esc-jury-vote-line">
                      <span>10 PTS</span>
                      <span>
                        {tenEntry.song.flag} {tenEntry.song.title}
                      </span>
                    </div>
                  )}
                  {eightEntry && (
                    <div className="esc-jury-vote-line">
                      <span>8 PTS</span>
                      <span>
                        {eightEntry.song.flag} {eightEntry.song.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
