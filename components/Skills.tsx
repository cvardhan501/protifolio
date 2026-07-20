"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, SkillCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

const TABS: (SkillCategory | "All")[] = ["All", "Frontend", "Backend", "AI/ML", "Tools"];

export default function Skills() {
  const [active, setActive] = useState<(SkillCategory | "All")>("All");

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">What I Work With</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Skills &amp; <span className="text-gradient-neon">Technologies</span>
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
              active === tab
                ? "border-gold/50 bg-gold/10 text-gold shadow-gold-glow"
                : "border-white/10 text-ink-muted hover:border-white/25 hover:text-ink"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass glass-hover rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-medium text-ink">{skill.name}</span>
                <span className="font-mono text-xs text-gold">{skill.level}%</span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-gold to-neon"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
