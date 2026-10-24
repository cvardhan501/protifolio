"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, ExternalLink, X, CheckCircle2, BookOpen, Sparkles, Calendar } from "lucide-react";
import Image from "next/image";
import { certificates, Certificate } from "@/lib/data";

type FilterType = "All" | "Professional" | "Course Completion" | "Event Participation";

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [modalCert, setModalCert] = useState<Certificate | null>(null);

  const filteredCerts = certificates.filter((cert) => {
    if (activeFilter === "All") return true;
    return cert.type === activeFilter;
  });

  return (
    <section id="certificates" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-96 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label mb-3">Credentials &amp; Knowledge</p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Certifications &amp; <span className="text-gradient-gold">Learning</span>
        </h2>
        <p className="mt-4 text-base text-ink-muted md:text-lg">
          Formally verified professional credentials, industry simulations, and validated coursework in Artificial Intelligence, Cloud Architecture, and Software Engineering.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(["All", "Professional", "Course Completion", "Event Participation"] as FilterType[]).map((tab) => {
            const count =
              tab === "All"
                ? certificates.length
                : certificates.filter((c) => c.type === tab).length;

            const isSelected = activeFilter === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-gold/15 text-gold border border-gold/40 shadow-[0_0_20px_rgba(245,194,66,0.15)]"
                    : "glass border border-white/5 text-ink-muted hover:border-white/20 hover:text-ink"
                }`}
              >
                <span>
                  {tab === "Professional"
                    ? "Professional Certifications"
                    : tab === "Course Completion"
                    ? "Course Completions & Simulations"
                    : tab === "Event Participation"
                    ? "Events & Hackathons"
                    : "All Credentials"}
                </span>
                <span className={`ml-2 rounded-full px-2 py-0.5 text-[10px] font-mono ${
                  isSelected ? "bg-gold/20 text-gold" : "bg-white/5 text-ink-muted"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Credentials */}
      <motion.div
        layout
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => {
            const isProfessional = cert.type === "Professional";

            return (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between rounded-2xl glass border border-white/10 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-glass hover:shadow-gold/5"
              >
                {/* Accent glow on hover */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(400px circle at 50% 0%, ${cert.color}18, transparent 70%)`,
                  }}
                />

                <div>
                  {/* Header Row: Category Badge & Year */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
                      style={{
                        backgroundColor: `${cert.color}15`,
                        color: cert.color,
                        border: `1px solid ${cert.color}30`,
                      }}
                    >
                      {isProfessional ? (
                        <Sparkles size={11} />
                      ) : cert.type === "Course Completion" ? (
                        <BookOpen size={11} />
                      ) : (
                        <Award size={11} />
                      )}
                      {cert.type}
                    </span>

                    <span className="font-mono text-xs text-ink-muted flex items-center gap-1">
                      <Calendar size={12} className="text-white/40" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="mt-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-gold">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Issue Date when verified */}
                  {cert.issueDate && (
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-muted/80 font-mono">
                      <CheckCircle2 size={13} className="text-emerald-400/80" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                  )}
                </div>

                {/* Footer Action: Preview or View Credential */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  {cert.image ? (
                    <button
                      onClick={() => setModalCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gold hover:text-gold-light transition-colors group/btn py-1"
                    >
                      <Eye size={14} className="transition-transform group-hover/btn:scale-110" />
                      <span>View Certificate Preview</span>
                    </button>
                  ) : (
                    <span className="text-xs text-ink-muted font-mono">Credential Verified</span>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-ink-muted hover:text-gold transition-colors"
                      title="Verify Credential"
                    >
                      <ExternalLink size={13} />
                      <span>Verify</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {modalCert && modalCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={modalCert.title}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl glass border border-white/20 p-5 md:p-7 overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalCert(null)}
                aria-label="Close certificate preview"
                className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-2 text-ink hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="mb-4 pr-10">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[11px] font-medium font-mono"
                    style={{
                      backgroundColor: `${modalCert.color}20`,
                      color: modalCert.color,
                      border: `1px solid ${modalCert.color}40`,
                    }}
                  >
                    {modalCert.type}
                  </span>
                  {modalCert.issueDate && (
                    <span className="text-xs text-ink-muted font-mono">
                      Completed: {modalCert.issueDate}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-ink">
                  {modalCert.title}
                </h3>
                <p className="text-sm text-ink-muted">
                  Issuing Organization: <span className="text-ink">{modalCert.issuer}</span>
                </p>
              </div>

              {/* Image Preview Container */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/50">
                <Image
                  src={modalCert.image}
                  alt={`${modalCert.title} credential certificate issued by ${modalCert.issuer}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
                <span>Verified Certificate Document</span>
                {modalCert.credentialUrl ? (
                  <a
                    href={modalCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline font-mono"
                  >
                    <ExternalLink size={13} />
                    Official Verification Link
                  </a>
                ) : (
                  <span className="font-mono text-ink-muted/70">Original Verified Record</span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
