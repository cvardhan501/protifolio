"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">Career Path</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Experience &amp; <span className="text-gradient-neon">Growth</span>
        </h2>
      </div>

      <div ref={containerRef} className="relative mt-16 pl-10">
        <div className="absolute left-[7px] top-0 h-full w-[2px] bg-white/10" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[7px] top-0 w-[2px] bg-gradient-to-b from-gold via-neon to-gold shadow-gold-glow"
        />

        <div className="flex flex-col gap-14">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[47px] top-0 grid h-9 w-9 place-items-center rounded-full border-2 border-gold bg-void shadow-gold-glow">
                <Briefcase size={14} className="text-gold" />
              </span>

              <div className="glass glass-hover rounded-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-gold">{item.year}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.role}</h3>
                <p className="text-sm text-neon-soft">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
