'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EMAIL = 'info@skylineintel.com';
const PHONE = '(305) 555-0147';
const INSTAGRAM_URL = 'https://instagram.com/skylineintel';
const FACEBOOK_URL = 'https://facebook.com/skylineintel';
const LINKEDIN_URL = 'https://linkedin.com/company/skylineintel';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-36 px-8 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,102,255,0.07) 0%, transparent 100%)',
        }}
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto gap-8"
      >
        <div>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#0066FF]" />
            <span className="font-mono text-xs text-[#0066FF] tracking-[0.25em] uppercase">
              Contact
            </span>
            <div className="h-px w-10 bg-[#0066FF]" />
          </div>
          <h2 className="font-display text-5xl text-white tracking-wide leading-tight">
            Ready for Clarity<br />From Above?
          </h2>
          <p className="mt-4 font-sans text-sm text-[#6a8aaa] leading-relaxed">
            Get professional insights, detailed reports, and complete property solutions
            from a team you can trust.
          </p>
        </div>

        {/* Primary CTA */}
        <a
          href={`mailto:${EMAIL}`}
          className="px-8 py-3.5 bg-[#0066FF] text-white font-sans font-semibold text-sm tracking-wide hover:bg-[#3385FF] transition-colors"
        >
          Request a Quote
        </a>

        {/* Phone */}
        <a
          href={`tel:${PHONE.replace(/\D/g, '')}`}
          className="font-mono text-sm text-[#6a8aaa] hover:text-white transition-colors"
        >
          {PHONE}
        </a>

        {/* Email with copy */}
        <div className="relative">
          <button
            onClick={copyEmail}
            className="font-mono text-sm text-[#4a6a88] hover:text-[#0066FF] transition-colors underline underline-offset-4 decoration-[#0066FF]/20 hover:decoration-[#0066FF]/60"
          >
            {EMAIL}
          </button>
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#0066FF] whitespace-nowrap"
              >
                copied to clipboard
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Social icons */}
        <div className="flex gap-6 mt-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2a4a6a] hover:text-[#0066FF] transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2a4a6a] hover:text-[#0066FF] transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2a4a6a] hover:text-[#0066FF] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

        <p className="font-mono text-[10px] text-[#1a3a5a] tracking-widest uppercase">
          Miami, FL · Mon–Sat 6:00AM–6:00PM
        </p>
      </motion.div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
