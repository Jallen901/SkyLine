'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
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
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-md bg-[#0a0a0a]/70 border-b border-white/[0.04]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <a
        href="#"
        className="font-serif text-lg text-white tracking-tight hover:opacity-70 transition-opacity"
      >
        Your Name
      </a>

      <div className="flex items-center gap-7">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-sans"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-sm px-4 py-1.5 border border-amber-500 text-amber-500 rounded-sm hover:bg-amber-500 hover:text-black transition-all duration-200 font-sans"
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}
