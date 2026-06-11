'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Insights', href: '#insights' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-md bg-[#071828]/80 border-b border-[#0066FF]/10'
          : 'bg-transparent',
      ].join(' ')}
    >
      {/* Wordmark */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="flex items-baseline gap-0.5">
          <span className="font-display text-4xl leading-none text-white">SL</span>
          <span className="font-display text-4xl leading-none text-[#0066FF]">|</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-display text-base tracking-[0.18em] text-white">
            SKYLINE
          </span>
          <span className="font-mono text-[9px] tracking-[0.28em] text-[#0066FF] mt-px">
            — INTEL —
          </span>
        </div>
      </a>

      <div className="flex items-center gap-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-[#a8b8cc] hover:text-white transition-colors duration-200 font-sans tracking-wide"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-sm px-5 py-2 bg-[#0066FF] text-white font-sans font-semibold tracking-wide hover:bg-[#3385FF] active:bg-[#0052cc] transition-colors duration-200"
        >
          Get a Quote
        </a>
      </div>
    </motion.nav>
  );
}
