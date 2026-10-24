"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, GraduationCap, TrendingUp, Maximize2, X, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const kiroAchievement = achievements.find((a) => a.id === "kiro-university-challenge");
  const academicAchievement = achievements.find((a) => a.id === "academic-excellence-sgpa");

  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      {/* Background subtle radial glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold/5 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label mb-3">Honors &amp; Recognition</p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Key <span className="text-gradient-gold">Achievements</span>
        </h2>
        <p className="mt-4 text-base text-ink-muted md:text-lg">
          Competitive hackathon recognitions and demonstrated academic milestones in Computer Science &amp; Artificial Intelligence.
        </p>
      </div>

      <div className="mt-14 space-y-8">
        {/* =========================================================================
            FEATURED ACHIEVEMENT: 3rd Place — Kiro University Challenge
           ========================================================================= */}
        {kiroAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl glass border border-gold/30 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(245,194,66,0.08)] transition-all duration-500 hover:border-gold/50"
          >
            {/* Top decorative badge */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold shadow-[0_0_20px_rgba(245,194,66,0.3)]">
                  <Trophy size={24} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-0.5 text-xs font-semibold text-gold">
                      <Award size={12} />
                      {kiroAchievement.badge}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">
                      {kiroAchievement.category}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {kiroAchievement.title}
                  </h3>
                </div>
              </div>

              {/* Leaderboard tag */}
              <div className="rounded-xl border border-white/10 bg-black/30 px-3.5 py-1.5 backdrop-blur-md">
                <p className="font-mono text-xs text-gold">Leaderboard Recognition</p>
                <p className="text-xs text-ink-muted">AWS User Group Madurai</p>
              </div>
            </div>

            {/* Content & Poster Grid */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Details & Metrics */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                <div>
                  <p className="text-base font-medium text-gold/90">
                    {kiroAchievement.recognition}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {kiroAchievement.description}
                  </p>
                </div>

                {/* Key Metrics / Highlights */}
                {kiroAchievement.metrics && (
                  <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-5">
                    {kiroAchievement.metrics.map((m) => (
                      <div key={m.label} className="text-center sm:text-left">
                        <p className="font-display text-lg font-bold text-ink sm:text-xl">
                          {m.value}
                        </p>
                        <p className="text-[11px] font-medium text-gold">{m.label}</p>
                        {m.sublabel && (
                          <p className="text-[10px] text-ink-muted">{m.sublabel}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-ink-muted font-mono">
                  <CheckCircle2 size={14} className="text-gold" />
                  <span>Verified Leaderboard Ranking &amp; Official Winner Poster</span>
                </div>
              </div>

              {/* Right Column: Original Winner Poster */}
              <div className="lg:col-span-7">
                {kiroAchievement.image && (
                  <div className="relative group/poster">
                    <button
                      type="button"
                      onClick={() => setSelectedPoster(kiroAchievement.image!)}
                      className="group/btn relative block w-full overflow-hidden rounded-2xl border border-gold/30 bg-black/60 shadow-2xl transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(245,194,66,0.2)] focus:outline-none focus:ring-2 focus:ring-gold"
                      aria-label="View full size AWS User Group Madurai Kiro University Challenge 3rd Place Winners Poster"
                    >
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={kiroAchievement.image}
                          alt={kiroAchievement.imageAlt || "AWS User Group Madurai Kiro University Challenge 3rd Place Winners Poster"}
                          fill
                          className="object-contain transition-transform duration-500 group-hover/btn:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 650px"
                          priority
                        />
                      </div>

                      {/* Hover Overlay with View Prompt */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover/btn:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black/80 px-4 py-2 text-xs font-semibold text-gold shadow-lg">
                          <Maximize2 size={14} />
                          Click to View Full Poster
                        </span>
                      </div>
                    </button>

                    <p className="mt-2 text-center text-xs text-ink-muted">
                      Original poster: <span className="text-ink">AWS User Group Madurai</span> — Kiro University Challenge Winners Podium
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            ACHIEVEMENT B: Academic Excellence — SGPA Improvement
           ========================================================================= */}
        {academicAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-emerald-500/30"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Academic details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <GraduationCap size={24} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-400">
                        {academicAchievement.badge}
                      </span>
                      <span className="font-mono text-xs text-ink-muted">
                        {academicAchievement.category}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {academicAchievement.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <p className="font-mono text-xs text-emerald-400">
                    B.Tech in Computer Science and Engineering (AI &amp; ML)
                  </p>
                  <p className="text-sm font-medium text-ink-muted">
                    Amity University Bengaluru
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {academicAchievement.description}
                  </p>
                </div>
              </div>

              {/* Right Column: SGPA Comparison Visual & Indicator */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                      Academic Trajectory
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                      <TrendingUp size={13} />
                      +0.77 Growth
                    </span>
                  </div>

                  {/* Side-by-side SGPA Comparison */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {/* Semester 1 */}
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                      <p className="text-xs font-mono text-ink-muted">Semester 1</p>
                      <p className="mt-2 font-display text-3xl font-bold text-ink">
                        8.42
                      </p>
                      <p className="mt-1 text-[11px] text-ink-muted">SGPA / 10.0</p>
                      {/* Bar indicator */}
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-white/40"
                          style={{ width: "84.2%" }}
                        />
                      </div>
                    </div>

                    {/* Semester 2 */}
                    <div className="relative rounded-xl border border-emerald-500/40 bg-emerald-500/[0.06] p-4 text-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                      <p className="text-xs font-mono text-emerald-400 font-medium">Semester 2</p>
                      <p className="mt-2 font-display text-3xl font-bold text-emerald-400">
                        9.19
                      </p>
                      <p className="mt-1 text-[11px] text-emerald-400/80">SGPA / 10.0</p>
                      {/* Bar indicator */}
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-emerald-950/60">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                          style={{ width: "91.9%" }}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs text-ink-muted/80">
                    Consistent academic rigor and semester-over-semester grade improvement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR ORIGINAL KIRO WINNERS POSTER
         ========================================================================= */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPoster(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-6 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="AWS User Group Madurai Kiro University Challenge Poster"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl glass border border-gold/30 bg-black/90 p-4 md:p-6 overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                aria-label="Close poster view"
                className="absolute top-4 right-4 z-20 rounded-full bg-white/10 p-2 text-ink hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <X size={20} />
              </button>

              <div className="mb-3 pr-10">
                <span className="font-mono text-xs text-gold">Official Winner Announcement Poster</span>
                <h3 className="font-display text-lg md:text-xl font-bold text-ink">
                  AWS User Group Madurai — Kiro University Challenge Build-Along Journey Winners
                </h3>
                <p className="text-xs text-ink-muted">
                  3rd Place Podium Recognition · C Vishnu Vardhan · 11 Active Days
                </p>
              </div>

              {/* Full Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                <Image
                  src={selectedPoster}
                  alt="AWS User Group Madurai Kiro University Challenge 3rd Place Winners Poster"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-ink-muted font-mono">
                <span>Original poster preserved without modification</span>
                <button
                  type="button"
                  onClick={() => setSelectedPoster(null)}
                  className="text-gold hover:underline"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
