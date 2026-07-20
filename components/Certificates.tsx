"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % certificates.length);
    }, 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="certificates" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">Credentials</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Certificates &amp; <span className="text-gradient-gold">Achievements</span>
        </h2>
      </div>

      <div
        className="relative mt-16 flex h-[320px] items-center justify-center [perspective:1400px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {certificates.map((cert, i) => {
          const offset = i - active;
          const isActive = offset === 0;
          const abs = Math.abs(offset);

          return (
            <motion.button
              key={cert.id}
              onClick={() => setActive(i)}
              animate={{
                x: offset * 150,
                scale: isActive ? 1.15 : 1 - abs * 0.12,
                rotateY: offset * -22,
                opacity: abs > 2 ? 0 : 1 - abs * 0.22,
                zIndex: 10 - abs,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: isActive ? 1.22 : 1 - abs * 0.1 }}
              className="glass absolute w-56 rounded-2xl p-6 text-left sm:w-64"
              style={{ borderColor: isActive ? `${cert.color}80` : undefined }}
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-xl"
                style={{ background: `${cert.color}22`, color: cert.color }}
              >
                <Award size={20} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{cert.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{cert.issuer}</p>
              <p className="mt-3 font-mono text-xs text-gold">{cert.year}</p>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {certificates.map((cert, i) => (
          <button
            key={cert.id}
            aria-label={`Go to ${cert.title}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-gold" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
