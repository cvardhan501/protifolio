"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X } from "lucide-react";
import Image from "next/image";
import { certificates, Certificate } from "@/lib/data";

export default function Certificates() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalCert, setModalCert] = useState<Certificate | null>(null);

  useEffect(() => {
    if (paused || modalCert) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % certificates.length);
    }, 3200);
    return () => clearInterval(id);
  }, [paused, modalCert]);

  const handleCardClick = (i: number, cert: Certificate) => {
    if (i === active && cert.image) {
      setModalCert(cert);
    } else {
      setActive(i);
    }
  };

  return (
    <section id="certificates" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-3">Credentials</p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Certificates &amp; <span className="text-gradient-gold">Achievements</span>
        </h2>
      </div>

      <div
        className="relative mt-16 flex h-[340px] items-center justify-center [perspective:1400px]"
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
              onClick={() => handleCardClick(i, cert)}
              animate={{
                x: offset * 150,
                scale: isActive ? 1.15 : 1 - abs * 0.12,
                rotateY: offset * -22,
                opacity: abs > 2 ? 0 : 1 - abs * 0.22,
                zIndex: 10 - abs,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: isActive ? 1.22 : 1 - abs * 0.1 }}
              className="glass absolute w-56 rounded-2xl p-6 text-left sm:w-64 cursor-pointer group"
              style={{ borderColor: isActive ? `${cert.color}80` : undefined }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ background: `${cert.color}22`, color: cert.color }}
                >
                  <Award size={20} />
                </span>
                {cert.image && isActive && (
                  <span className="flex items-center gap-1 text-xs text-gold font-mono bg-gold/10 px-2 py-1 rounded-full group-hover:bg-gold/20 transition-colors">
                    <Eye size={12} /> View
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink leading-snug">{cert.title}</h3>
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

      {/* Certificate Modal */}
      <AnimatePresence>
        {modalCert && modalCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl glass border border-white/20 p-4 md:p-6 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setModalCert(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-ink hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="mb-4">
                <h3 className="font-display text-xl font-bold text-ink">{modalCert.title}</h3>
                <p className="text-sm text-ink-muted">{modalCert.issuer} — {modalCert.issueDate || modalCert.year}</p>
              </div>
              <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
                <Image
                  src={modalCert.image}
                  alt={modalCert.title}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
