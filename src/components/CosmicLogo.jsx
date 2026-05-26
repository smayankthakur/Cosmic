export default function CosmicLogo({ size = 64, animate = true, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cosmic Matrix logo"
    >
      <defs>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5E4A8" stopOpacity="1" />
          <stop offset="40%" stopColor="#C9A84C" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B6E2E" stopOpacity="0.8" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C97A" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B6E2E" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ambient glow background */}
      <circle cx="50" cy="50" r="48" fill="url(#glowGrad)" />

      {/* Outer ring with tick marks */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" strokeOpacity="0.6" />

      {/* 12 tick marks on outer ring */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 - 90) * Math.PI / 180;
        const r1 = 40, r2 = 44;
        return (
          <line
            key={i}
            x1={50 + r1 * Math.cos(angle)}
            y1={50 + r1 * Math.sin(angle)}
            x2={50 + r2 * Math.cos(angle)}
            y2={50 + r2 * Math.sin(angle)}
            stroke="#C9A84C"
            strokeWidth={i % 3 === 0 ? "1.2" : "0.5"}
            strokeOpacity={i % 3 === 0 ? "0.9" : "0.4"}
          />
        );
      })}

      {/* Outer rotating ring (CSS animated in App) */}
      {animate && (
        <g style={{ transformOrigin: '50px 50px', animation: 'logoRingRotate 40s linear infinite' }}>
          <circle cx="50" cy="50" r="38" fill="none" stroke="#C9A84C" strokeWidth="0.3" strokeOpacity="0.3" strokeDasharray="3 6" />
        </g>
      )}

      {/* 6-pointed star (hexagram) */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        const r = 28;
        return (
          <line
            key={i}
            x1={50 + r * Math.cos(rad + Math.PI)}
            y1={50 + r * Math.sin(rad + Math.PI)}
            x2={50 + r * Math.cos(rad)}
            y2={50 + r * Math.sin(rad)}
            stroke="#C9A84C"
            strokeWidth="0.5"
            strokeOpacity="0.35"
          />
        );
      })}

      {/* Inner mandala petals (6 petals) */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 60) * Math.PI / 180;
        const cx = 50 + 18 * Math.cos(angle);
        const cy = 50 + 18 * Math.sin(angle);
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="9" ry="5"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            transform={`rotate(${i * 60}, ${cx}, ${cy})`}
          />
        );
      })}

      {/* Middle ring */}
      <circle cx="50" cy="50" r="20" fill="none" stroke="url(#ringGrad)" strokeWidth="0.8" strokeOpacity="0.7" />

      {/* Inner decorative ring */}
      <circle cx="50" cy="50" r="12" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* Center star symbol — M × D */}
      <g filter="url(#glow)">
        {/* 4-pointed star */}
        <path
          d="M50,38 L52,48 L50,62 L48,48 Z M38,50 L48,52 L62,50 L48,48 Z"
          fill="url(#coreGrad)"
          fillOpacity="0.9"
        />
        {/* Diagonal arms */}
        <path
          d="M42,42 L49,49 L58,58 M58,42 L51,49 L42,58"
          fill="none"
          stroke="url(#coreGrad)"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />
      </g>

      {/* Core dot */}
      <circle cx="50" cy="50" r="3.5" fill="url(#coreGrad)" filter="url(#softGlow)" />
      <circle cx="50" cy="50" r="1.5" fill="#F5E4A8" />

      {/* 4 cardinal diamonds */}
      {[0, 90, 180, 270].map((deg, i) => {
        const rad = (deg - 90) * Math.PI / 180;
        const r = 30;
        const cx = 50 + r * Math.cos(rad);
        const cy = 50 + r * Math.sin(rad);
        return (
          <rect
            key={i}
            x={cx - 2} y={cy - 2}
            width="4" height="4"
            fill="#C9A84C"
            fillOpacity="0.7"
            transform={`rotate(45, ${cx}, ${cy})`}
          />
        );
      })}

      <style>{`
        @keyframes logoRingRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
}
