'use client';

import { motion } from 'framer-motion';

interface Post {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

export default function Writing({ posts }: { posts: Post[] }) {
  return (
    <section id="insights" className="py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#0066FF]" />
            <span className="font-mono text-xs text-[#0066FF] tracking-[0.25em] uppercase">
              Insights
            </span>
          </div>
          <h2 className="font-display text-5xl text-white tracking-wide">
            From the Field
          </h2>
        </motion.div>

        <div className="max-w-2xl divide-y divide-[#0066FF]/8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.07,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-7 group"
            >
              <a href={`/insights/${post.slug}`} className="block space-y-2">
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-sans text-[15px] font-semibold text-white group-hover:text-[#3385FF] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <time className="font-mono text-[11px] text-[#2a4a6a] flex-shrink-0">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </time>
                </div>
                <p className="font-sans text-sm text-[#4a6a88] leading-relaxed">
                  {post.excerpt}
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
