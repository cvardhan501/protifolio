"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">From The Blog</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Latest <span className="text-gradient-neon">Writing</span>
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover group flex flex-col overflow-hidden rounded-2xl"
          >
            <div
              className="h-40 w-full"
              style={{ background: `linear-gradient(155deg, ${post.color}30, #0c1330 75%)` }}
            />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-1.5 text-xs text-ink-muted">
                <Calendar size={12} /> {post.date}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
              <button className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gold">
                Read More
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
