"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-28 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">Kind Words</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Client <span className="text-gradient-neon">Testimonials</span>
        </h2>
      </div>

      <div className="relative mt-14 min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="glass mx-auto max-w-2xl rounded-3xl p-10 text-center"
          >
            <Quote className="mx-auto text-gold/60" size={28} />
            <p className="mt-5 text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-4 font-display text-base font-semibold text-ink">{t.name}</p>
            <p className="text-sm text-ink-muted">{t.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((item, i) => (
          <button
            key={item.id}
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-neon" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
