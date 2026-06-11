'use client';

import { motion } from 'framer-motion';
import DotGrid from './DotGrid';

const headlineLines = ['I build things', 'that scale.'];

const fadeUp = (delay: number) => ({
  initial: { y: 32, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <DotGrid />

      {/* radial fade so dots don't compete with text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, transparent 0%, #0a0a0a 100%)',
        }}
      />

      <div className="relative z-10 px-8 w-full max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {headlineLines.map((line, i) => (
            <motion.h1
              key={i}
              {...fadeUp(i * 0.06)}
              className="font-serif font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}
            >
              {line}
            </motion.h1>
          ))}

          <motion.p
            {...fadeUp(0.18)}
            className="mt-7 font-mono text-sm text-neutral-500 tracking-wide"
          >
            // Senior engineer shipping scalable products, taming distributed systems,
            and writing code worth reading.
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-10 flex gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-amber-500 text-black text-sm font-medium font-sans hover:bg-amber-400 active:bg-amber-600 transition-colors"
            >
              View Work
            </a>
            <a
              href="#writing"
              className="px-6 py-3 border border-white/20 text-white text-sm font-medium font-sans hover:border-white/50 hover:bg-white/[0.03] transition-all"
            >
              Read my writing
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
