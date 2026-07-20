import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050816",
        "void-light": "#0A1024",
        "void-card": "#0C1330",
        gold: {
          DEFAULT: "#F5C242",
          soft: "#F7D477",
          dim: "#8A6F26",
        },
        neon: {
          DEFAULT: "#8B5CF6",
          bright: "#A855F7",
          soft: "#C4B5FD",
        },
        ink: {
          DEFAULT: "#E7E9F3",
          muted: "#8A90A8",
          faint: "#5A6079",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(245,194,66,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,194,66,0.05) 1px, transparent 1px)",
        "radial-glow-gold":
          "radial-gradient(circle at center, rgba(245,194,66,0.18) 0%, transparent 70%)",
        "radial-glow-neon":
          "radial-gradient(circle at center, rgba(139,92,246,0.22) 0%, transparent 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        "gold-glow": "0 0 40px rgba(245,194,66,0.25)",
        "neon-glow": "0 0 40px rgba(139,92,246,0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
