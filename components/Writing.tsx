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
    <section id="writing" className="py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
            Writing
          </span>
          <h2 className="mt-3 font-serif text-3xl text-white font-bold">
            Things I&apos;ve written
          </h2>
        </motion.div>

        <div className="max-w-2xl space-y-0 divide-y divide-white/[0.05]">
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
              className="py-6 group"
            >
              <a href={`/writing/${post.slug}`} className="block space-y-1.5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-sans text-[15px] font-medium text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <time className="font-mono text-[11px] text-neutral-600 flex-shrink-0">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </time>
                </div>
                <p className="font-sans text-sm text-neutral-500 leading-relaxed">
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
