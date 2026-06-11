'use client';

interface Props {
  variant?: 'full' | 'mark';
  height?: number;
  darkBg?: boolean;
}

/**
 * SVG reproduction of the Skyline Intel logo from the brand package.
 * - "full"  = SL mark + SKYLINE / — INTEL — wordmark side by side
 * - "mark"  = SL monogram only
 */
export default function SkylineLogo({
  variant = 'full',
  height = 44,
  darkBg = true,
}: Props) {
  const textColor = darkBg ? '#FFFFFF' : '#0A1A2F';

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 64 64"
        height={height}
        width={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Skyline Intel mark"
      >
        {/* S letter */}
        <text
          x="1"
          y="52"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '58px' }}
          fill={textColor}
        >
          S
        </text>
        {/* L letter */}
        <text
          x="31"
          y="52"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '58px' }}
          fill={textColor}
        >
          L
        </text>
        {/* Blue diagonal accent — mimics the slash on the L from brand package */}
        <line
          x1="44"
          y1="3"
          x2="60"
          y2="52"
          stroke="#0066FF"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* full variant */
  return (
    <svg
      viewBox="0 0 210 56"
      height={height}
      width={(height / 56) * 210}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Skyline Intel"
    >
      {/* ── SL monogram ── */}
      <text
        x="0"
        y="46"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '50px' }}
        fill={textColor}
      >
        S
      </text>
      <text
        x="28"
        y="46"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '50px' }}
        fill={textColor}
      >
        L
      </text>
      {/* Blue diagonal accent on the L */}
      <line
        x1="41"
        y1="3"
        x2="54"
        y2="48"
        stroke="#0066FF"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Vertical divider */}
      <line
        x1="70"
        y1="8"
        x2="70"
        y2="50"
        stroke="#0066FF"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />

      {/* ── Wordmark ── */}
      {/* SKYLINE */}
      <text
        x="82"
        y="28"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '18px',
          letterSpacing: '3.5px',
        }}
        fill={textColor}
      >
        SKYLINE
      </text>

      {/* — INTEL — */}
      <text
        x="82"
        y="47"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '9.5px',
          letterSpacing: '4px',
        }}
        fill="#0066FF"
      >
        — INTEL —
      </text>
    </svg>
  );
}
