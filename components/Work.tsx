'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    name: 'Stealth SaaS',
    year: '2024',
    description: 'Zero-to-one B2B platform handling real-time data ingestion at millions of events per day.',
    stack: ['Go', 'Kafka', 'PostgreSQL', 'Next.js'],
    caseStudy: '#',
  },
  {
    name: 'Open Source Tool',
    year: '2023',
    description: 'CLI developer tool for managing multi-environment configs — 4k GitHub stars in 6 months.',
    stack: ['Rust', 'CLI', 'WASM'],
    caseStudy: '#',
  },
  {
    name: 'Internal Platform',
    year: '2022',
    description: 'Internal developer platform that reduced deployment time from 40 minutes to under 3.',
    stack: ['Kubernetes', 'Terraform', 'Python', 'React'],
    caseStudy: '#',
  },
  {
    name: 'API Infrastructure',
    year: '2021',
    description: 'Rebuilt a legacy REST API into a GraphQL gateway serving 50M monthly requests.',
    stack: ['Node.js', 'GraphQL', 'Redis', 'AWS'],
    caseStudy: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="px-8 max-w-7xl mx-auto mb-12"
      >
        <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
          Selected Work
        </span>
        <h2 className="mt-3 font-serif text-3xl text-white font-bold">
          Projects
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="px-8 flex gap-5 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.07,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{ scale: hovered ? 1.01 : 1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex-shrink-0 w-[320px] border border-white/[0.06] bg-white/[0.02] p-7 flex flex-col gap-4 cursor-default"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="flex items-start justify-between">
        <h3 className="font-serif text-xl text-white font-bold leading-tight">
          {project.name}
        </h3>
        <span className="font-mono text-xs text-neutral-600 mt-1">
          {project.year}
        </span>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed font-sans flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-0.5 border border-white/10 text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="case-study"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href={project.caseStudy}
                className="font-mono text-xs text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                Read case study
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
