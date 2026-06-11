'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    number: '01',
    title: 'FAA Part 107 Certified',
    body: 'All pilots hold active FAA Part 107 Remote Pilot Certificates and carry full liability insurance — giving you inspection results that hold up legally and with insurers.',
  },
  {
    number: '02',
    title: 'Advanced Technology',
    body: 'Industry-leading DJI drones with 4K HDR, thermal, and LiDAR payloads. Our fleet is continuously updated so you always get the sharpest, most accurate data available.',
  },
  {
    number: '03',
    title: 'Fast Turnaround',
    body: 'Standard reports delivered within 48 hours of the flight. Rush same-day turnaround available for time-sensitive projects and insurance claims.',
  },
  {
    number: '04',
    title: 'Actionable Intelligence',
    body: 'We don\'t just deliver footage. Every report is annotated, measured, and structured so you can act on it immediately — no guesswork, no back-and-forth.',
  },
];

export default function Skills() {
  return (
    <section id="why-us" className="py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#0066FF]" />
            <span className="font-mono text-xs text-[#0066FF] tracking-[0.25em] uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-display text-5xl text-white tracking-wide">
            Precision You Can Trust
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0066FF]/8 border border-[#0066FF]/8">
          {reasons.map(({ number, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.07,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#071828] p-10 flex flex-col gap-4"
            >
              <span className="font-mono text-[10px] text-[#0066FF] tracking-widest">
                {number}
              </span>
              <h3 className="font-display text-2xl text-white tracking-wide">
                {title}
              </h3>
              <p className="font-sans text-sm text-[#6a8aaa] leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
