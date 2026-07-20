# C VISHNU VARDHAN — Portfolio

A premium, dark-glassmorphism portfolio built with Next.js 15, React 19, TypeScript,
Tailwind CSS, Three.js / React Three Fiber, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Stack

- **Next.js 15 (App Router) + React 19 + TypeScript**
- **Tailwind CSS** — custom design tokens in `tailwind.config.ts` (navy `#050816`, gold `#F5C242`, neon purple `#8B5CF6`)
- **Three.js + @react-three/fiber + @react-three/drei** — the hero's 3D scene (`components/three/HeroScene.tsx`)
- **Framer Motion** — scroll reveals, tilt cards, counters, page/loading transitions
- **@fontsource** — Space Grotesk / Inter / JetBrains Mono, self-hosted so builds don't depend on network access to Google Fonts

## Project structure

```
app/                  # App Router: layout, global styles, page
components/           # All UI sections (Hero, Skills, Projects, etc.)
components/three/     # React Three Fiber scene
lib/data.ts           # All site content (skills, projects, experience, etc.) — edit this to update copy
lib/utils.ts          # Small className helper
```

## Editing content

Everything text/data-driven (skills, projects, experience, certificates, testimonials,
gallery, blog posts, stats) lives in `lib/data.ts`. Update that file and the whole site
updates — no need to touch individual components.

## Things to wire up before going live

This is a **frontend-only** build (per your last answer, no backend/DB/auth were built).
A few integration points are stubbed with clear comments so you can drop in real services:

- **Contact form** (`components/Contact.tsx`) — currently simulates sending. Wire it to
  EmailJS, or a Next.js API route / your own backend, where the comment says so.
- **Resume download** (`components/Navbar.tsx`) — points to `/resume.pdf`; add your actual
  PDF to the `public/` folder.
- **Social links** — replace the placeholder `https://github.com/`, `linkedin.com/`, etc.
  with your real profile URLs throughout `components/Hero.tsx` and `components/Footer.tsx`.
- **Images** — the about photo, project screenshots, gallery, and blog covers currently use
  styled gradient placeholders instead of real images/photos. Drop real assets into `public/`
  and swap in `next/image` where marked.

## Notes on scope

The original brief also asked for a full Express/MongoDB/JWT backend and an admin CMS.
That wasn't built in this pass — happy to do that as a follow-up if you'd like it as a
separate Node/Express project (or as Next.js API routes + MongoDB Atlas) connected to this
frontend.
