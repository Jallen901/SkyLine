'use client';

import { motion } from 'framer-motion';
import DotGrid from './DotGrid';
import SkylineLogo from './SkylineLogo';

const headlineLines = ['CLARITY', 'FROM ABOVE'];

const fadeUp = (delay: number) => ({
  initial: { y: 36, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <DotGrid />

      {/* Dark radial vignette so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 25% 50%, transparent 0%, #071828 80%)',
        }}
      />

      {/* Bottom gradient to blend into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #071828)',
        }}
      />

      <div className="relative z-10 px-8 w-full max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Logo mark */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <SkylineLogo variant="full" height={52} darkBg />
          </motion.div>

          {/* Headline */}
          {headlineLines.map((line, i) => (
            <motion.h1
              key={i}
              {...fadeUp(i * 0.06)}
              className="font-display text-white leading-[0.95] tracking-[0.03em]"
              style={{ fontSize: 'clamp(72px, 11vw, 152px)' }}
            >
              {line}
            </motion.h1>
          ))}

          {/* Rule */}
          <motion.div {...fadeUp(0.14)} className="mt-6 flex items-center gap-4">
            <div className="h-[2px] w-16 bg-[#0066FF]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#0066FF] uppercase">
              Clarity From Above
            </span>
            <div className="h-[2px] w-16 bg-[#0066FF]" />
          </motion.div>

          {/* Sub */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 font-sans text-[15px] text-[#7a9ab8] leading-relaxed max-w-xl"
          >
            Aerial intelligence and full property solutions — from roof inspections
            to 3D mapping. FAA Part 107 certified pilots. Miami &amp; South Florida.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.28)} className="mt-10 flex gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 bg-[#0066FF] text-white text-sm font-sans font-semibold tracking-wide hover:bg-[#3385FF] active:bg-[#0052cc] transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="px-7 py-3.5 border border-white/20 text-white text-sm font-sans font-medium tracking-wide hover:border-[#0066FF]/60 hover:bg-[#0066FF]/5 transition-all"
            >
              View Services
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.36)}
            className="mt-16 flex gap-10"
          >
            {[
              { value: 'FAA', label: 'Part 107 Certified' },
              { value: '500+', label: 'Properties Inspected' },
              { value: '48hr', label: 'Report Turnaround' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="font-display text-3xl text-[#0066FF] leading-none">
                  {value}
                </span>
                <span className="font-mono text-[10px] text-[#4a6a88] tracking-wider uppercase">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
