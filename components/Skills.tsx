'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    domain: 'Backend',
    tools: 'Go, Node.js, Python, PostgreSQL, Redis, Kafka, gRPC',
  },
  {
    domain: 'Frontend',
    tools: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion',
  },
  {
    domain: 'Infrastructure',
    tools: 'AWS, GCP, Terraform, Docker, Kubernetes, GitHub Actions, Datadog',
  },
  {
    domain: 'Data',
    tools: 'BigQuery, dbt, Apache Spark, Airflow, Redshift',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
            Stack
          </span>
          <h2 className="mt-3 font-serif text-3xl text-white font-bold">
            Skills &amp; Tools
          </h2>
        </motion.div>

        <div className="max-w-2xl space-y-0 divide-y divide-white/[0.05]">
          {skills.map(({ domain, tools }, i) => (
            <motion.div
              key={domain}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.06,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-[140px_1fr] gap-8 py-5 items-baseline"
            >
              <span className="font-mono text-xs text-neutral-500 tracking-wide uppercase">
                {domain}
              </span>
              <span className="font-sans text-sm text-neutral-300 leading-relaxed">
                {tools}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
