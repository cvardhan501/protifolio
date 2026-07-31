"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, PlayCircle, X } from "lucide-react";
import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";

const SOCIALS = [
  { icon: Github, href: "https://github.com/cvardhan501", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/c-vishnu-vardhan-3435a5240", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:cvardhan501@gmail.com", label: "Email" },
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden py-28 md:py-32">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-radial-glow-gold blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-radial-glow-neon blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,8,22,0.4)_70%,#050816_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12">
        {/* Left column — Text & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <p className="section-label mb-3 sm:mb-4">Hi, I&apos;m</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-ink">C VISHNU</span>
            <br />
            <span className="text-gradient-gold">VARDHAN</span>
          </h1>

          <p className="mt-4 sm:mt-5 h-8 font-mono text-base text-neon-soft sm:text-lg md:text-xl">
            <TypewriterText
              words={["AI & ML Engineer", "Full Stack Developer", "Freelance Web Developer", "Custom Website Builder", "Available for Freelance"]}
            />
          </p>

          <p className="mt-5 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-ink-muted">
            Passionate AI & ML student and Full Stack Developer focused on creating modern, responsive web applications and intelligent solutions. I enjoy turning ideas into clean, scalable digital products while constantly learning and improving. Open to freelance projects, internships, and opportunities to build impactful technology.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-void shadow-gold-glow transition-transform hover:scale-[1.03]"
            >
              View My Work <ArrowUpRight size={16} />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-neon/50 hover:text-neon-soft"
            >
              Contact Me
            </MagneticButton>

            <MagneticButton
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-gold shadow-md backdrop-blur transition-all hover:bg-gold hover:text-void hover:scale-[1.03]"
            >
              <PlayCircle size={18} /> Watch Intro
            </MagneticButton>
          </div>

          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4 relative z-20">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-ink transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right column — Image (Top on mobile, increased top height) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 mx-auto flex w-full justify-center lg:order-2 lg:mt-6"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[540px]">
            <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-neon/30 blur-xl" />

            <div className="glass relative overflow-hidden rounded-[2rem] border border-gold/30 p-2">
              <div className="relative aspect-[3/4.5] sm:aspect-[6.5/10.5] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-void-light to-void">
                <div className="absolute inset-0 grid-bg opacity-40" />

                <Image
                  src="/images/hero-prof.png"
                  alt="C VISHNU VARDHAN"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 540px"
                  className="object-cover rounded-[1.6rem]"
                />

                <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-gold/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Watch Intro Video Modal — Matching increased card height */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[540px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-br from-gold/40 via-transparent to-neon/40 blur-xl" />

              <div className="glass relative overflow-hidden rounded-[2rem] border border-gold/40 p-2 shadow-2xl">
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 z-30 grid h-9 w-9 place-items-center rounded-full bg-void/80 text-gold border border-gold/40 shadow-lg backdrop-blur-md transition-all hover:bg-gold hover:text-void hover:scale-110 active:scale-95"
                  aria-label="Close intro video"
                >
                  <X size={18} />
                </button>

                <div className="relative aspect-[3/4.5] sm:aspect-[6.5/10.5] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-void-light to-void">
                  <div className="absolute inset-0 grid-bg opacity-40" />

                  <video
                    autoPlay
                    controls
                    playsInline
                    className="h-full w-full object-cover rounded-[1.6rem]"
                  >
                    <source src="/images/vishnu_port.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-gold/20 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}