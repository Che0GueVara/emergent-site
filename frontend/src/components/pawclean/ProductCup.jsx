import { useId } from "react";

/**
 * Silicone paw cleaning cup — SVG mockup.
 * Renders a stylised gobelet with bristles (top opening), highlight, base.
 * `tone` controls the silicone colour; the design follows the brief.
 */
export default function ProductCup({
  tone = "#3F6B58",
  toneLight = "#A1B29E",
  size = 260,
  className = "",
  ...props
}) {
  // stable unique gradient ids per instance
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 260 320"
      width={size}
      height={size * (320 / 260)}
      className={className}
      {...props}
      aria-hidden
    >
      <defs>
        <linearGradient id={`body-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={toneLight} stopOpacity="1" />
          <stop offset="55%" stopColor={tone} stopOpacity="1" />
          <stop offset="100%" stopColor={tone} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={`rim-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={toneLight} stopOpacity="1" />
          <stop offset="100%" stopColor={tone} stopOpacity="1" />
        </linearGradient>
        <radialGradient id={`inner-${id}`} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#0e1a16" stopOpacity="0.85" />
          <stop offset="100%" stopColor={tone} stopOpacity="0.95" />
        </radialGradient>
        <filter id={`soft-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* base shadow plate */}
      <ellipse cx="130" cy="300" rx="92" ry="10" fill={tone} opacity="0.22" />

      {/* body */}
      <path
        d="M55 100 Q 55 80 80 75 L 180 75 Q 205 80 205 100 L 195 275 Q 192 295 170 298 L 90 298 Q 68 295 65 275 Z"
        fill={`url(#body-${id})`}
      />

      {/* side hi-light */}
      <path
        d="M70 110 Q 65 130 70 200 L 78 270"
        stroke={toneLight}
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M195 110 Q 200 130 195 200 L 188 270"
        stroke="#0e1a16"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* upper rim */}
      <ellipse
        cx="130"
        cy="78"
        rx="78"
        ry="14"
        fill={`url(#rim-${id})`}
        stroke="#0e1a16"
        strokeOpacity="0.1"
      />
      {/* inner mouth */}
      <ellipse cx="130" cy="80" rx="70" ry="11" fill={`url(#inner-${id})`} />

      {/* silicone bristles — ring */}
      <g filter={`url(#soft-${id})`}>
        {Array.from({ length: 26 }).map((_, i) => {
          const ang = (Math.PI * i) / 25; // top arc
          const cx = 130 + Math.cos(ang) * 64;
          const cy = 80 + Math.sin(ang) * 8 - 4;
          const len = 18 + Math.sin(i * 0.7) * 2;
          return (
            <rect
              key={`outer-${i}`}
              x={cx - 2.2}
              y={cy - len}
              width="4.4"
              height={len}
              rx="2"
              fill={toneLight}
              opacity="0.85"
              transform={`rotate(${(i - 12) * 6} ${cx} ${cy})`}
            />
          );
        })}
        {Array.from({ length: 22 }).map((_, i) => {
          const cx = 130 + (i - 10.5) * 6;
          const cy = 82;
          const len = 14 + Math.sin(i * 1.2) * 2;
          return (
            <rect
              key={`mid-${i}`}
              x={cx - 2}
              y={cy - len}
              width="4"
              height={len}
              rx="2"
              fill={toneLight}
              opacity="0.92"
            />
          );
        })}
      </g>

      {/* tiny PawClean monogram embossed */}
      <text
        x="130"
        y="235"
        textAnchor="middle"
        fontFamily="Playfair Display, serif"
        fontSize="14"
        fill="#0e1a16"
        opacity="0.18"
        fontStyle="italic"
      >
        PawClean
      </text>
    </svg>
  );
}
