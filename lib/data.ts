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
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 94, category: "Frontend" },
  { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express", level: 87, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },
  { name: "Python", level: 89, category: "AI/ML" },
  { name: "AI Tools & Prompting", level: 85, category: "AI/ML" },
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Postman API", level: 88, category: "Tools" },
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
    id: "airdropx",
    title: "AirDropX",
    description:
      "An offline P2P file sharing web app utilizing WebRTC for seamless local Wi-Fi device discovery and data transfer.",
    tags: ["WebRTC", "P2P", "Next.js"],
    color: "#06B6D4",
    github: "https://github.com/",
    live: "https://airdropx.vercel.app/",
  },
  {
    id: "ftp-three",
    title: "FTP Three",
    description:
      "A lightweight FTP client UI deployed to Vercel.",
    tags: ["Next.js", "Vercel"],
    color: "#10B981",
    github: "https://github.com/",
    live: "https://ftp-three.vercel.app/",
  },
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
  {
    id: "scfc-grade-calculator",
    title: "SCFC Grade Calculator",
    description:
      "A premium academic grade calculator that enables SCFC students to calculate SGPA and CGPA through an intuitive glassmorphism interface with dynamic course selection, automatic credit mapping, live calculations, and a responsive user experience.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Glassmorphism",
      "Responsive Design",
      "Local Storage"
    ],
    color: "#6C63FF",
    github: "https://github.com/yourusername/",
    live: "https://scfc-grade-cal.vercel.app/",
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
  {
    id: "monolith-gym",
    title: "Gym Landing Page Theme-3",
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
    live: "https://gym-page3.vercel.app/",
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
    role: "B.Tech in Computer Science & Engineering (AI & ML)",
    company: "Amity University Bengaluru",
    description:
      "Pursuing B.Tech CSE in Artificial Intelligence & Machine Learning, building a strong foundation in AI models, software engineering, algorithms, cloud platforms, and modern web applications.",
  },
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  color: string;
  image?: string;
  issueDate?: string;
}

export const certificates: Certificate[] = [
  {
    id: "c-postman-api",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2026",
    color: "#FF6C37",
    image: "/images/postman-api-fundamentals.png",
    issueDate: "January 08, 2026",
  },
  {
    id: "c-aws-ml-ai",
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training & Certification",
    year: "2026",
    color: "#FF9900",
    image: "/images/aws-ml-ai-certificate.png",
    issueDate: "August 08, 2026",
  },
  {
    id: "c-aws-community-day",
    title: "AWS Student Community Day Bengaluru 2026",
    issuer: "Amity University & AWS Cloud Club",
    year: "2026",
    color: "#00A4E4",
    image: "/images/aws-community-day-bengaluru.png",
    issueDate: "2026",
  },
  {
    id: "c-be10x-ai-tools",
    title: "AI Tools and ChatGPT Workshop",
    issuer: "be10x",
    year: "2026",
    color: "#8B5CF6",
    image: "/images/be10x-ai-tools-workshop.jpg",
    issueDate: "May 31, 2026",
  },
  {
    id: "c-aub-sih-2025",
    title: "AUB Smart India Hackathon 2025",
    issuer: "Amity University & SIH",
    year: "2025",
    color: "#10B981",
    image: "/images/aub-smart-india-hackathon-2025.png",
    issueDate: "September 25, 2025",
  },
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
  { label: "Projects", value: 12, suffix: "+" },
  { label: "Technologies", value: 14, suffix: "+" },
  { label: "Certificates", value: 5, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
];
