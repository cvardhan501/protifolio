"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { projects, freelanceProjects, Project } from "@/lib/data";

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
      <div className="relative overflow-hidden rounded-[1.35rem]">
        <div
          className="relative flex h-48 items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(155deg, ${project.color}22, #0c1330 70%)` }}
        >
          <span
            className="font-display text-4xl font-bold opacity-80"
            style={{ color: project.color }}
          >
            {project.title}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-void-card via-transparent to-transparent" />
          <div className="absolute -inset-y-full inset-x-0 -skew-y-6 bg-white/5 opacity-0 transition-all duration-700 group-hover:translate-y-full group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-gold/40 hover:text-gold"
            >
              <Github size={14} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-soft px-4 py-2 text-xs font-semibold text-void"
            >
              Live Demo <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [showFreelance, setShowFreelance] = useState(false);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  };

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

      <div className="relative mt-12 min-h-[500px]">
        <AnimatePresence mode="wait">
          {!showFreelance ? (
            <motion.div
              key="main-projects"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div
                ref={scrollerRef}
                className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [perspective:1000px]"
              >
                <motion.div
                  className="glass group relative flex w-[85vw] shrink-0 snap-center flex-col items-center justify-center overflow-hidden rounded-3xl p-1 sm:w-[420px] shadow-[0_0_30px_rgba(245,194,66,0.15)] ring-1 ring-gold/30 transition-all hover:shadow-[0_0_40px_rgba(245,194,66,0.3)] hover:ring-gold/60"
                >
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold tracking-wider text-gold uppercase backdrop-blur-md border border-gold/30">
                    Explore
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `linear-gradient(135deg, #F5C24266, transparent 60%)` }} />
                  <div className="relative flex h-full w-full min-h-[440px] flex-col items-center justify-center overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#151109] to-[#0c1330] p-8 text-center border border-white/5">
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

                {projects.map((project) => (
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
