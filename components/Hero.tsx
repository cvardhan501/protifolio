"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, PlayCircle } from "lucide-react";
import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";

const SOCIALS = [
  { icon: Github, href: "https://github.com/", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/c-vishnu-vardhan-3435a5240?utm_source=share_via&", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:cvardhan501@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32 md:pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-radial-glow-gold blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-radial-glow-neon blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,8,22,0.4)_70%,#050816_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-4">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <p className="section-label mb-4">Hi, I&apos;m</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-ink">C VISHNU</span>
            <br />
            <span className="text-gradient-gold">VARDHAN</span>
          </h1>

          <p className="mt-5 h-8 font-mono text-lg text-neon-soft md:text-xl">
            <TypewriterText
              words={["AI & ML Engineer","Full Stack Developer","Freelance Web Developer","Custom Website Builder","Available for Freelance"]}
            />
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted">
            Passionate AI & ML student and Full Stack Developer focused on creating modern, responsive web applications and intelligent solutions. I enjoy turning ideas into clean, scalable digital products while constantly learning and improving. Open to freelance projects, internships, and opportunities to build impactful technology.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-void shadow-gold-glow transition-transform hover:scale-[1.03]"
            >
              View My Work <ArrowUpRight size={16} />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-neon/50 hover:text-neon-soft"
            >
              Contact Me
            </MagneticButton>

            <MagneticButton
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-gold"
            >
              <PlayCircle size={20} /> Watch Intro
            </MagneticButton>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.02] text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:text-gold"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right column — illustration */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 h-[420px] sm:h-[520px] lg:order-2 lg:h-[680px]"
        >
          <div className="animate-float-slow relative mx-auto h-full w-full max-w-[560px] drop-shadow-[0_0_70px_rgba(245,194,66,0.22)]">
            <Image
              src="/images/hero-prof.png"
              alt="Illustrated portrait of C Vishnu Vardhan working at a laptop"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-contain"
            />
          </div>
        </motion.div> */}
        {/* Right column */}
{/* <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative order-1 mx-auto flex w-full justify-center lg:order-2"
>
  <div className="relative w-full max-w-[500px]">
    <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-neon/30 blur-xl" />

    <div className="glass relative overflow-hidden rounded-[2rem] border border-gold/30 p-2">
      <div className="relative h-[500px] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-void-light to-void">
        <div className="absolute inset-0 grid-bg opacity-40" />

        <Image
          src="/images/hero-profile.png"
          alt="C VISHNU VARDHAN"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-gold/20" />
      </div>
    </div>
  </div>
</motion.div> */}
{/* Right column */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative order-1 mx-auto flex w-full justify-center lg:order-2"
>
  <div className="relative w-full max-w-[650px]">
    <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-neon/30 blur-xl" />

    <div className="glass relative overflow-hidden rounded-[2rem] border border-gold/30 p-2">
      <div className="relative h-[700px] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-void-light to-void">
        <div className="absolute inset-0 grid-bg opacity-40" />

        <Image
          src="/images/hero-prof.png"
          alt="C VISHNU VARDHAN"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-gold/20" />
      </div>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}