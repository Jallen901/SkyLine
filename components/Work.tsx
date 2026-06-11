'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    name: 'Aerial Inspections',
    tag: '01',
    description:
      'High-resolution drone inspections for roofs, exteriors, and hard-to-reach areas — full coverage without ladders or scaffolding.',
    details: ['4K HDR Imagery', 'Thermal Overlay', 'FAA Certified Pilot'],
    link: '#contact',
  },
  {
    name: 'Roof Inspections',
    tag: '02',
    description:
      'Identify damage, wear, and structural issues before they become costly. Detailed PDF reports with annotated imagery delivered in 48 hours.',
    details: ['360° Coverage', 'AI-Assisted Analysis', 'Insurance-Ready Report'],
    link: '#contact',
  },
  {
    name: 'Solar Panel Inspections',
    tag: '03',
    description:
      'Thermal imaging reveals hot spots, microcracks, and shading losses invisible to the eye. Catch efficiency killers before they cost you.',
    details: ['Thermal Imaging', 'Performance Data', 'Defect Mapping'],
    link: '#contact',
  },
  {
    name: 'Construction Monitoring',
    tag: '04',
    description:
      'Regular aerial documentation keeps stakeholders aligned and catches schedule slips early. 3D mapping and progress tracking included.',
    details: ['3D Mapping', 'Progress Tracking', 'Stakeholder Portal'],
    link: '#contact',
  },
  {
    name: 'Photography & Video',
    tag: '05',
    description:
      'Professional aerial visuals for marketing, documentation, and insurance. Cinematic drone footage and high-res stills, edited and delivered fast.',
    details: ['4K Cinematic', 'Edited Delivery', 'Same-Day Rush Available'],
    link: '#contact',
  },
  {
    name: 'Data Analytics',
    tag: '06',
    description:
      'Raw data transformed into actionable intelligence. GIS mapping, site analysis, and reporting you can take straight to planning committees.',
    details: ['GIS Mapping', 'Site Analysis', 'PDF + CAD Export'],
    link: '#contact',
  },
];

export default function Work() {
  return (
    <section id="services" className="py-28 overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="px-8 max-w-7xl mx-auto mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#0066FF]" />
          <span className="font-mono text-xs text-[#0066FF] tracking-[0.25em] uppercase">
            Our Services
          </span>
        </div>
        <h2 className="font-display text-5xl text-white tracking-wide">
          More Than Just Footage
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="px-8 flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.06,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{ scale: hovered ? 1.01 : 1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex-shrink-0 w-[300px] bg-[#0A1A2F] border border-[#0066FF]/10 p-7 flex flex-col gap-5 cursor-default"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Top stripe accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, #0066FF, #3385FF)'
            : 'rgba(0,102,255,0.25)',
          transition: 'background 0.3s ease',
        }}
      />

      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] text-[#0066FF] tracking-widest">
          {service.tag}
        </span>
      </div>

      <h3 className="font-display text-2xl text-white tracking-wide leading-tight">
        {service.name}
      </h3>

      <p className="font-sans text-sm text-[#6a8aaa] leading-relaxed flex-1">
        {service.description}
      </p>

      <div className="flex flex-col gap-1.5">
        {service.details.map((d) => (
          <div key={d} className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[#0066FF] flex-shrink-0" />
            <span className="font-mono text-[10px] text-[#4a6a88] tracking-wide">
              {d}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="cta"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-[#0066FF]/10">
              <a
                href={service.link}
                className="font-sans text-xs font-semibold text-[#0066FF] hover:text-[#3385FF] transition-colors flex items-center gap-2 tracking-wide"
              >
                Request this service
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
