"use client";

import { motion } from "framer-motion";
import { gallery } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">Behind The Scenes</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Gallery &amp; <span className="text-gradient-gold">Moments</span>
        </h2>
      </div>

      <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div]:mb-4">
        {gallery.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
              item.tall ? "h-96" : "h-56"
            }`}
            style={{ background: `linear-gradient(155deg, ${item.color}25, #0c1330 75%)` }}
          >
            <div className="absolute inset-0 flex items-end p-5">
              <p className="font-display text-sm font-medium text-ink opacity-80 transition-opacity group-hover:opacity-100">
                {item.title}
              </p>
            </div>
            <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:scale-105 group-hover:bg-white/5" />
            <div className="pointer-events-none absolute -inset-y-full inset-x-0 -skew-y-6 bg-white/10 opacity-0 transition-all duration-700 group-hover:translate-y-full group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
