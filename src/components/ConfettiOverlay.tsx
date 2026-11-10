import React, { useMemo } from 'react';

interface ConfettiOverlayProps {
  active: boolean;
  count?: number;
}

const COLORS = ['#FFD166', '#FF3FA4', '#27E5D5', '#873EFF', '#263BFF', '#FFFFFF'];

export const ConfettiOverlay: React.FC<ConfettiOverlayProps> = ({ active, count = 55 }) => {
  const pieces = useMemo(() => {
    return Array.from({ length: count }).map((_, idx) => ({
      id: idx,
      left: `${(idx * 17) % 100}%`,
      delay: `${((idx * 7) % 30) * 0.1}s`,
      duration: `${2.8 + ((idx * 13) % 25) * 0.1}s`,
      color: COLORS[idx % COLORS.length],
      size: 7 + (idx % 6),
      rotate: (idx * 45) % 360,
    }));
  }, [count]);

  if (!active) return null;

  return (
    <div className="esc-confetti-container" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="esc-confetti-piece"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};
