"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { stats } from "@/lib/data";
import { useCountUp } from "./useCountUp";

function StatCard({ label, value, suffix, index }: { label: string; value: number; suffix: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(ref, value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass glass-hover rounded-2xl px-6 py-7 text-center"
    >
      <p className="font-display text-4xl font-semibold text-gradient-gold">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-muted">{label}</p>
    </motion.div>
  );
}

export default function StatsCards() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 md:-mt-16">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="glass glass-hover col-span-2 flex flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-gold/10 to-neon/10 px-6 py-7 text-center md:col-span-1"
        >
          <Sparkles className="text-gold" size={22} />
          <p className="font-display text-sm font-medium text-ink">Available for work</p>
        </motion.div>
      </div>
    </section>
  );
}
