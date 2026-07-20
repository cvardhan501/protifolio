"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", light);
  }, [light]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 md:px-6",
          scrolled
            ? "border-gold/20 bg-void/70 shadow-glass backdrop-blur-xl"
            : "border-white/5 bg-white/[0.02] backdrop-blur-md"
        )}
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-wide text-ink">
          C VISHNU <span className="text-gradient-gold">VARDHAN</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-ink-muted transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setLight((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-gold/40 hover:text-gold"
          >
            {light ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-4 py-2 text-sm font-medium text-void shadow-gold-glow transition-transform hover:scale-105 md:flex"
          >
            <Download size={15} /> Download CV
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ink"
              >
                <X size={18} />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-6 pt-8">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-ink hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
