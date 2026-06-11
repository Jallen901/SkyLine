'use client';

export default function DotGrid() {
  return (
    <>
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,102,255,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Diagonal brand stripe — top right */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none overflow-hidden"
        aria-hidden
      >
        <svg
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <line
            x1="320"
            y1="0"
            x2="480"
            y2="220"
            stroke="#0066FF"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <line
            x1="360"
            y1="0"
            x2="480"
            y2="160"
            stroke="#0066FF"
            strokeWidth="3"
            strokeOpacity="0.2"
          />
          <line
            x1="400"
            y1="0"
            x2="480"
            y2="100"
            stroke="#0066FF"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
        </svg>
      </div>
    </>
  );
}
