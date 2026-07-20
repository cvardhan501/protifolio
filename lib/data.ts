export type SkillCategory = "Frontend" | "Backend" | "AI/ML" | "Tools";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 92, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 94, category: "Frontend" },
  { name: "Three.js", level: 80, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express", level: 87, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Backend" },
  { name: "Firebase", level: 78, category: "Backend" },
  { name: "Python", level: 89, category: "AI/ML" },
  { name: "TensorFlow", level: 74, category: "AI/ML" },
  { name: "Java", level: 76, category: "Tools" },
  { name: "C++", level: 70, category: "Tools" },
  { name: "Docker", level: 72, category: "Tools" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    id: "finlytics",
    title: "Finlytics",
    description:
      "A real-time personal finance dashboard with predictive spend analytics, budget alerts, and investment tracking rendered through interactive glass charts.",
    tags: ["Next.js", "MongoDB", "Chart.js", "JWT"],
    color: "#F5C242",
    github: "https://github.com/",
    live: "https://finlytics-bz6f.onrender.com",
  },
  {
    id: "meghanas-kitchen",
    title: "Meghana's Kitchen ",
    description:
      " boutique restaurant ordering platform with live table availability, recipe storytelling pages, and a Cloudinary-backed gallery of signature dishes.",
    tags: ["React", "Node.js", "Express", "Cloudinary"],
    color: "#8B5CF6",
    github: "https://github.com/",
    live: "https://meghanas-kitchen-3dmenu.vercel.app/",
  },
  {
    id: "ai-healthmate",
    title: "AI HealthMate",
    description:
      "An AI symptom-triage assistant that pairs a fine-tuned NLP model with a doctor-matching engine and encrypted health records.",
    tags: ["Python", "TensorFlow", "FastAPI", "MongoDB"],
    color: "#F5C242",
    github: "https://github.com/",
    live: "https://healthmate-ai-zndt.onrender.com",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A minimal, beautifully animated weather companion with hyperlocal forecasting, air-quality overlays, and gesture-based navigation.",
    tags: ["React", "OpenWeather API", "Framer Motion"],
    color: "#8B5CF6",
    github: "https://github.com/",
    live: "https://nimbus-weather-app-seven.vercel.app",
  },
  {
    id: "smart-hostel",
    title: "Snake-Game",
    description:
      "A modern, responsive recreation of the retro arcade classic built with fluid animations and keyboard controls. Features real-time score tracking, persistent high-score saving via local storage, and increasing speed levels to challenge players as the snake grows", tags: ["Next.js", "MongoDB", "Socket.IO"],
    color: "#F5C242",
    github: "https://github.com/",
    live: "https://snake-game-tpfk.onrender.com",
  },
];

export const freelanceProjects: Project[] = [
  {
    id: "digital-menu",
    title: "Digital Restaurant Menu",
    description:
      "An interactive, responsive digital menu card featuring category filtering, live search, and smooth animations for a premium dining experience.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#F5C242",
    github: "https://github.com/",
    live: "https://meghanas-kitchen-3dmenu.vercel.app/",
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS Dashboard",
    description:
      "A high-performance Point of Sale dashboard optimized for speed, featuring real-time bill calculations, table tracking, and dynamic order management.",
    tags: ["Next.js", "Tailwind CSS", "State Management"],
    color: "#8B5CF6",
    github: "https://github.com/",
    live: "https://meghanas-kitchen-pos.vercel.app/",
  },
  {
    id: "luxury-gold-shop",
    title: "Luxury Gold Shop Webpage",
    description:
      "A sophisticated high-end jewelry e-commerce showcase featuring a live gold rate ticker, filterable item catalogs, and elegant visual animations.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#F5C242",
    github: "https://github.com/",
    live: "https://gold-delta-murex.vercel.app/",
  },
   {
  id: "monolith-gym",
  title: "Gym Landing Page Theme-1",
  description:
    "A premium 3D fitness website featuring cinematic hero animations, interactive training programs, GSAP-powered scroll effects, glassmorphism UI, and immersive luxury gym branding.",
  tags: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
    "GSAP",
    "Three.js",
    "React Three Fiber"
  ],
  color: "#FF6A3D",
  github: "https://github.com/",
  live: "https://gym-1-rouge.vercel.app/",
},
   {
  id: "monolith-gym",
  title: "Gym Landing Page Theme-2",
  description:
    "A premium 3D fitness website featuring cinematic hero animations, interactive training programs, GSAP-powered scroll effects, glassmorphism UI, and immersive luxury gym branding.",
  tags: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
    "GSAP",
    "Three.js",
    "React Three Fiber"
  ],
  color: "#FF6A3D",
  github: "https://github.com/",
  live: "https://gym-2-jade.vercel.app/",
},
];

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    year: "2026 — Present",
    role: "AI & Full Stack Developer",
    company: "Freelance / Independent",
    description:
      "Designing and shipping full-stack products end to end — from 3D marketing sites to AI-powered internal tools for early-stage teams.",
  },
  {
    year: "2025 — 2026",
    role: "Full Stack Engineer Intern",
    company: "Nimbus Labs",
    description:
      "Built and shipped customer-facing dashboards in Next.js and Node, cutting page load time by 40% through image and bundle optimization.",
  },
  {
    year: "2025",
    role: "B.Tech in Computer Science",
    company: "University",
    description:
      "Started my B.Tech journey, building a strong foundation in computer science, algorithms, and modern software development.",
  },
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  color: string;
}

export const certificates: Certificate[] = [
  { id: "c1", title: "Full Stack Web Development", issuer: "Meta", year: "2024", color: "#F5C242" },
  { id: "c2", title: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2024", color: "#8B5CF6" },
  { id: "c3", title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023", color: "#F5C242" },
  { id: "c4", title: "Advanced React & Next.js", issuer: "Vercel", year: "2025", color: "#8B5CF6" },
  { id: "c5", title: "Data Structures & Algorithms", issuer: "GeeksforGeeks", year: "2023", color: "#F5C242" },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ananya Rao",
    role: "Product Lead, Nimbus Labs",
    quote:
      "Vishnu turned a vague brief into a polished product in weeks. The attention to motion and detail was on another level.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rahul Menon",
    role: "Founder, Meghana's Kitchen",
    quote:
      "Our booking platform finally feels as premium as the food we serve. Support after launch has been fantastic too.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sara Iyer",
    role: "Hackathon Director",
    quote:
      "The platform handled thousands of participants without a hiccup, and looked stunning doing it.",
    rating: 5,
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  tall?: boolean;
  color: string;
}

export const gallery: GalleryItem[] = [
  { id: "g1", title: "Studio Setup", tall: true, color: "#F5C242" },
  { id: "g2", title: "Design Sprint", color: "#8B5CF6" },
  { id: "g3", title: "Late Night Build", color: "#F5C242" },
  { id: "g4", title: "Hackathon Win", tall: true, color: "#8B5CF6" },
  { id: "g5", title: "Conference Talk", color: "#F5C242" },
  { id: "g6", title: "Team Offsite", color: "#8B5CF6" },
];

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  color: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Designing Interfaces That Feel Alive",
    date: "June 12, 2026",
    excerpt:
      "Motion isn't decoration — it's feedback. Here's how I think about pacing, easing, and restraint when animating a product.",
    color: "#F5C242",
  },
  {
    id: "b2",
    title: "Shipping AI Features Without the Hype",
    date: "May 3, 2026",
    excerpt:
      "A practical framework for deciding when a model actually belongs in your product, and when it's just noise.",
    color: "#8B5CF6",
  },
  {
    id: "b3",
    title: "The Case for Slow Portfolios",
    date: "March 21, 2026",
    excerpt:
      "Why I rebuilt my site around a single 3D scene instead of ten shallow sections — and what it did for conversion.",
    color: "#F5C242",
  },
];

export const stats = [
  { label: "Projects", value: 15, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "Certificates", value: 5, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
];
