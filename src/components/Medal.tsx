import React, { useState } from 'react';
import { Download, Share2, Sparkles, Star, Crown, Check } from 'lucide-react';

interface MedalProps {
  quizScore: number;
  correctCount: number;
  totalRounds: number;
  winnerSongTitle: string;
  irina12SongTitle: string;
}

export const Medal: React.FC<MedalProps> = ({
  quizScore,
  correctCount,
  totalRounds,
  winnerSongTitle,
  irina12SongTitle,
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const [sharedMsg, setSharedMsg] = useState<string | null>(null);

  /**
   * Renders a high-res 1080x1080 collectible PNG medal on an HTML5 Canvas
   * and downloads it so Irina can keep it in her 12-day challenge collection.
   */
  const handleDownloadMedalPng = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Deep Eurovision Night Background
    const bgGrad = ctx.createRadialGradient(540, 480, 80, 540, 540, 650);
    bgGrad.addColorStop(0, '#263BFF');
    bgGrad.addColorStop(0.45, '#15124A');
    bgGrad.addColorStop(1, '#080B2A');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1080);

    // 2. Stage Spotlight Beams
    ctx.save();
    const beamGrad = ctx.createLinearGradient(0, 0, 1080, 1080);
    beamGrad.addColorStop(0, 'rgba(255, 63, 164, 0.18)');
    beamGrad.addColorStop(0.5, 'rgba(255, 209, 102, 0.12)');
    beamGrad.addColorStop(1, 'rgba(39, 229, 213, 0.18)');
    ctx.fillStyle = beamGrad;
    ctx.fillRect(0, 0, 1080, 1080);
    ctx.restore();

    // 3. Decorative Ribbons at top
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(410, 60);
    ctx.lineTo(490, 320);
    ctx.lineTo(540, 290);
    ctx.lineTo(475, 60);
    ctx.closePath();
    ctx.fillStyle = '#FF3FA4';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(670, 60);
    ctx.lineTo(590, 320);
    ctx.lineTo(540, 290);
    ctx.lineTo(605, 60);
    ctx.closePath();
    ctx.fillStyle = '#27E5D5';
    ctx.fill();
    ctx.restore();

    // 4. Outer Golden Glow & Medal Rim
    const centerX = 540;
    const centerY = 490;
    const outerRadius = 290;

    ctx.save();
    ctx.shadowColor = 'rgba(255, 209, 102, 0.75)';
    ctx.shadowBlur = 55;
    const goldGrad = ctx.createLinearGradient(
      centerX - outerRadius,
      centerY - outerRadius,
      centerX + outerRadius,
      centerY + outerRadius
    );
    goldGrad.addColorStop(0, '#FFF3B0');
    goldGrad.addColorStop(0.3, '#FFD166');
    goldGrad.addColorStop(0.65, '#E09F1F');
    goldGrad.addColorStop(1, '#FFF099');

    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.fillStyle = goldGrad;
    ctx.fill();
    ctx.restore();

    // 5. Inner Dark Royal Ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius - 24, 0, Math.PI * 2);
    ctx.fillStyle = '#0D1238';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#FFD166';
    ctx.stroke();

    // 6. Inner Gold Medallion Core
    const coreGrad = ctx.createRadialGradient(centerX, centerY - 40, 20, centerX, centerY, 220);
    coreGrad.addColorStop(0, '#FFF5C0');
    coreGrad.addColorStop(0.55, '#FFD166');
    coreGrad.addColorStop(1, '#C8820E');
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius - 58, 0, Math.PI * 2);
    ctx.fillStyle = coreGrad;
    ctx.fill();

    // 7. Medal Typography inside circle
    ctx.fillStyle = '#080B2A';
    ctx.textAlign = 'center';

    ctx.font = '800 26px Outfit, sans-serif';
    ctx.fillText('★  OFFICIAL CHALLENGE MEDAL  ★', centerX, centerY - 135);

    ctx.font = '900 185px Outfit, sans-serif';
    ctx.fillText('12', centerX, centerY + 35);

    ctx.font = '900 38px Outfit, sans-serif';
    ctx.fillText('POINTS', centerX, centerY + 85);

    // Pill inside medal
    ctx.fillStyle = '#080B2A';
    ctx.beginPath();
    ctx.roundRect(centerX - 165, centerY + 110, 330, 48, 24);
    ctx.fill();

    ctx.fillStyle = '#FFD166';
    ctx.font = '800 24px Outfit, sans-serif';
    ctx.fillText('EUROVISION EXPERT', centerX, centerY + 142);

    // 8. Footer Certificate Banner on Canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 42px Outfit, sans-serif';
    ctx.fillText('🎂 ¡FELIZ CUMPLEAÑOS, IRINA! 🎂', centerX, 855);

    ctx.fillStyle = '#27E5D5';
    ctx.font = '700 28px Inter, sans-serif';
    ctx.fillText(
      `Puntuación Musical: ${quizScore} PTS (${correctCount}/${totalRounds} aciertos)`,
      centerX,
      908
    );

    ctx.fillStyle = '#FFD166';
    ctx.font = '600 24px Inter, sans-serif';
    ctx.fillText(`Tus 12 Points: ${irina12SongTitle}`, centerX, 952);

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '500 21px Inter, sans-serif';
    ctx.fillText(`Canción Ganadora de la Gala: ${winnerSongTitle}`, centerX, 992);

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'medalla-12-points-eurovision-irina.png';
    link.href = dataUrl;
    link.click();

    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 3500);
  };

  const handleShare = async () => {
    const text = `🏅 ¡He desbloqueado la medalla 12 POINTS – EUROVISION EXPERT en el reto especial del Cumpleaños de Irina!\n🎵 Puntuación: ${quizScore} PTS (${correctCount}/${totalRounds})\n🇪🇸 Mis 12 Points: ${irina12SongTitle}\n🏆 Ganadora de la gala: ${winnerSongTitle}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '12 POINTS – Eurovision Expert (Cumple de Irina)',
          text,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setSharedMsg('¡Resultado copiado al portapapeles!');
      window.setTimeout(() => setSharedMsg(null), 3000);
    } catch {
      setSharedMsg('¡Medalla lista para guardar!');
      window.setTimeout(() => setSharedMsg(null), 3000);
    }
  };

  return (
    <div className="esc-medal-showcase">
      <div className="esc-medal-Unlocked-tag">
        <Sparkles size={15} />
        <span>RECOMPENSA DESBLOQUEADA · COLECCIÓN CUMPLEAÑOS DE IRINA</span>
      </div>

      {/* Circular Golden Collectible Medal */}
      <div className="esc-medal-stage">
        <div className="esc-medal-rays" aria-hidden="true" />
        <div className="esc-medal-ribbons" aria-hidden="true">
          <span className="ribbon-left" />
          <span className="ribbon-right" />
        </div>

        <div className="esc-golden-medal" role="img" aria-label="Medalla 12 POINTS Eurovision Expert">
          <div className="esc-medal-outer-ring">
            <div className="esc-medal-inner-ring">
              <div className="esc-medal-stars-row">
                <Star size={14} fill="currentColor" />
                <Crown size={18} />
                <Star size={14} fill="currentColor" />
              </div>

              <div className="esc-medal-number-12">12</div>
              <div className="esc-medal-points-word">POINTS</div>

              <div className="esc-medal-expert-ribbon">EUROVISION EXPERT</div>

              <div className="esc-medal-irina-stamp">★ IRINA EDITION ★</div>
            </div>
          </div>
        </div>
      </div>

      <div className="esc-medal-caption">
        <h3>🏅 12 POINTS – EUROVISION EXPERT</h3>
        <p>
          Guarda tu medalla oficial en alta resolución como imagen coleccionable del reto.
        </p>
      </div>

      <div className="esc-medal-actions">
        <button
          type="button"
          className="esc-gold-btn"
          onClick={handleDownloadMedalPng}
        >
          {downloaded ? <Check size={18} /> : <Download size={18} />}
          <span>{downloaded ? '¡MEDALLA GUARDADA (PNG)!' : 'GUARDAR MEDALLA (PNG)'}</span>
        </button>

        <button
          type="button"
          className="esc-secondary-btn"
          onClick={handleShare}
        >
          <Share2 size={18} />
          <span>{sharedMsg || 'COMPARTIR RESULTADO'}</span>
        </button>
      </div>
    </div>
  );
};
