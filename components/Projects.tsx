"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft, Lock, Sparkles } from "lucide-react";
import { projects, freelanceProjects, Project } from "@/lib/data";

const FILTER_CATEGORIES = ["All", "AI / ML", "Full-Stack", "Web Engineering", "Tools"] as const;

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="glass group relative w-[85vw] shrink-0 snap-center overflow-hidden rounded-3xl p-1 sm:w-[420px]"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${project.color}55, transparent 60%)`,
        }}
      />
      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.35rem]">
        <div>
          {/* Card Header Visual */}
          <div
            className="relative flex h-48 items-center justify-center overflow-hidden"
            style={{ background: `linear-gradient(155deg, ${project.color}22, #0c1330 70%)` }}
          >
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-card via-void/40 to-transparent" />
              </>
            ) : (
              <>
                <span
                  className="px-4 text-center font-display text-4xl font-bold opacity-80 select-none"
                  style={{ color: project.color }}
                >
                  {project.title}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-void-card via-transparent to-transparent" />
              </>
            )}

            {/* Badges in Header */}
            <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-between">
              {project.category ? (
                <span className="rounded-full border border-white/10 bg-void/80 px-2.5 py-1 font-mono text-[10px] text-ink-muted backdrop-blur-md">
                  {project.category}
                </span>
              ) : (
                <span />
              )}

              {project.featured && (
                <span className="flex items-center gap-1 rounded-full border border-gold/30 bg-gold/15 px-2.5 py-1 font-mono text-[10px] font-semibold text-gold backdrop-blur-md">
                  <Sparkles size={11} /> Featured
                </span>
              )}
            </div>

            <div className="pointer-events-none absolute -inset-y-full inset-x-0 -skew-y-6 bg-white/5 opacity-0 transition-all duration-700 group-hover:translate-y-full group-hover:opacity-100 z-10" />
          </div>

          <div className="p-6">
            <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-gold">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2">
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {project.isPrivateRepo ? (
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-ink-muted cursor-default"
                title="Private source code repository"
              >
                <Lock size={13} className="text-gold/80" /> Private Source
              </span>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-gold/40 hover:text-gold"
              >
                <Github size={14} /> Code
              </a>
            ) : null}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-4 py-2 text-xs font-semibold text-void transition-transform hover:scale-105 shadow-gold-glow/20"
              >
                Live Demo <ExternalLink size={13} />
              </a>
            )}

            {project.articleUrl && (
              <a
                href={project.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold text-gold transition-all hover:border-gold hover:bg-gold/20 hover:text-gold-light"
              >
                Article <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [showFreelance, setShowFreelance] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  };

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "AI / ML") {
      return (
        p.category?.includes("AI") ||
        p.category?.includes("ML") ||
        p.tags.some((t) =>
          ["Python", "FastAPI", "TensorFlow", "Playwright", "axe-core", "Strands Decider 2B", "Gemini AI"].includes(t)
        )
      );
    }
    if (selectedFilter === "Full-Stack") {
      return (
        p.category?.includes("Full-Stack") ||
        p.tags.some((t) => ["Next.js", "Node.js", "MongoDB", "Express", "JWT"].includes(t))
      );
    }
    if (selectedFilter === "Web Engineering") {
      return (
        p.category?.includes("Web") ||
        p.category?.includes("P2P") ||
        p.category?.includes("Security") ||
        p.tags.some((t) => ["WebRTC", "P2P", "256-bit Encryption"].includes(t))
      );
    }
    if (selectedFilter === "Tools") {
      return (
        p.category?.includes("Tools") ||
        p.category?.includes("EdTech") ||
        p.category?.includes("Game") ||
        p.tags.some((t) => ["Local Storage", "HTML5 Canvas", "OpenWeather API"].includes(t))
      );
    }
    return true;
  });

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-0 py-28 md:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="section-label mb-3">
          {showFreelance ? "Independent Work" : "Selected Work"}
        </p>
        <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          {showFreelance ? (
            <>
              Freelance <span className="text-gradient-gold">Projects</span>
            </>
          ) : (
            <>
              Featured <span className="text-gradient-gold">Projects</span>
            </>
          )}
        </h2>
      </div>

      <div className="relative mt-8 min-h-[500px]">
        <AnimatePresence mode="wait">
          {!showFreelance ? (
            <motion.div
              key="main-projects"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Category Filter Pills */}
              <div className="mb-10 flex flex-wrap items-center justify-center gap-2 px-6">
                {FILTER_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedFilter(cat);
                      scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                    }}
                    aria-pressed={selectedFilter === cat}
                    className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all duration-300 ${
                      selectedFilter === cat
                        ? "scale-105 bg-gold font-semibold text-void shadow-gold-glow/30"
                        : "border border-white/10 bg-white/[0.03] text-ink-muted hover:border-gold/30 hover:text-ink"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div
                ref={scrollerRef}
                className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [perspective:1000px]"
              >
                {/* Independent Freelance Overview Card (always visible in 'All' or at start) */}
                {selectedFilter === "All" && (
                  <motion.div className="glass group relative flex w-[85vw] shrink-0 snap-center flex-col items-center justify-center overflow-hidden rounded-3xl p-1 shadow-[0_0_30px_rgba(245,194,66,0.15)] ring-1 ring-gold/30 transition-all hover:shadow-[0_0_40px_rgba(245,194,66,0.3)] hover:ring-gold/60 sm:w-[420px]">
                    <div className="absolute top-4 right-4 z-10 rounded-full border border-gold/30 bg-gold/20 px-3 py-1 text-[10px] font-bold tracking-wider text-gold uppercase backdrop-blur-md">
                      Explore
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `linear-gradient(135deg, #F5C24266, transparent 60%)` }}
                    />
                    <div className="relative flex h-full w-full min-h-[440px] flex-col items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/5 bg-gradient-to-br from-[#151109] to-[#0c1330] p-8 text-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-void-card via-transparent to-transparent" />
                      <h3 className="relative font-display text-3xl font-semibold text-ink">Independent Freelance</h3>
                      <p className="relative mt-3 text-lg text-gold/80">{freelanceProjects.length} Projects Shipped</p>
                      <button
                        onClick={() => setShowFreelance(true)}
                        className="relative mt-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-void shadow-lg shadow-gold/20 transition-transform hover:scale-105"
                      >
                        View Freelance Projects <ChevronRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              <div className="mt-6 flex justify-center gap-3 px-6">
                <button
                  onClick={() => scroll(-1)}
                  aria-label="Scroll left"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-ink transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scroll(1)}
                  aria-label="Scroll right"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-ink transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="freelance-projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="px-6"
            >
              <div className="mb-8 flex justify-center">
                <button
                  onClick={() => setShowFreelance(false)}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  Back to Featured Projects
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {freelanceProjects.map((project) => (
                  <div key={project.id} className="flex justify-center">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
