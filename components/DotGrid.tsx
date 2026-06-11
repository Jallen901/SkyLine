'use client';

export default function DotGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />
  );
}
