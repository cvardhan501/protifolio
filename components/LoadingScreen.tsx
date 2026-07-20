"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18, 100);
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => setVisible(false), 350);
        }
        return next;
      });
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-void"
        >
          <p className="font-display text-2xl tracking-[0.3em] text-ink">
            Hi,<span className="text-gold"></span>
          </p>
          <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-neon"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-mono text-xs text-ink-muted">{Math.floor(progress)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
