"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";

const QUICK_LINKS = ["Home", "About", "Skills", "Projects", "Experience"];
const SERVICES = ["Web Development", "3D & Motion Design", "AI Integration", "UI/UX Design"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    window.setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Animated world-map dot field */}
      <div className="pointer-events-none absolute inset-x-0 top-10 h-64 opacity-20">
        <svg viewBox="0 0 800 300" className="h-full w-full">
          {Array.from({ length: 18 }).map((_, row) =>
            Array.from({ length: 44 }).map((_, col) => {
              const seed = (row * 44 + col) % 7;
              if (seed !== 0) return null;
              return (
                <motion.circle
                  key={`${row}-${col}`}
                  cx={col * 18 + 6}
                  cy={row * 18 + 6}
                  r={1.4}
                  fill="#F5C242"
                  animate={{ opacity: [0.15, 0.7, 0.15] }}
                  transition={{
                    duration: 3 + ((row + col) % 4),
                    repeat: Infinity,
                    delay: ((row + col) % 5) * 0.4,
                  }}
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              C VISHNU <span className="text-gradient-gold">VARDHAN</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">
              Crafting premium, immersive digital experiences at the intersection of engineering
              and design.
            </p>
            <div className="mt-5 flex gap-3">
              {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink-muted transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-ink-muted transition-colors hover:text-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-ink-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Newsletter</p>
            <p className="mt-4 text-sm text-ink-muted">Occasional notes on design, code, and 3D.</p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full min-w-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-ink outline-none focus:border-gold/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gradient-to-r from-gold to-gold-soft px-4 py-2.5 text-xs font-semibold text-void"
              >
                Join
              </button>
            </form>
            {subscribed && <p className="mt-2 text-xs text-gold">Subscribed — welcome aboard!</p>}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} C VISHNU VARDHAN. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold transition-all hover:-translate-y-1 hover:shadow-gold-glow"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
