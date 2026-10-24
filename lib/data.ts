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
  category?: string;
  tags: string[];
  color: string;
  github?: string;
  live?: string;
  articleUrl?: string;
  isPrivateRepo?: boolean;
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "accesslens-ai",
    title: "AccessLens AI — Civic Access Auditor",
    description:
      "An evidence-gated accessibility auditing platform that evaluates civic websites, identifies accessibility issues, and uses an AI decision layer for intelligent triage and review.",
    category: "AI/ML · Agentic AI · Accessibility",
    tags: ["Python", "FastAPI", "Playwright", "axe-core", "SQLite", "Strands Decider 2B"],
    color: "#FF9900",
    github: "https://github.com/cvardhan501/AccessLens-AI",
    live: "https://accesslens-ai.onrender.com",
    articleUrl:
      "https://builder.aws.com/content/3L6RxO6AC0EYOLVSM4cKemw7IDX/accesslens-ai-civic-accessibility-auditing-with-strands-decider-2b",
    featured: true,
    image: "/images/accesslens-ai-cover.png",
  },
  {
    id: "campus-connect",
    title: "CampusConnect",
    description:
      "A campus management platform combining student issue reporting, admin-to-staff workflows, role-based access control, and lost-and-found functionality.",
    category: "Full-Stack Development · Campus Tech",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "JWT / RBAC", "Gemini AI"],
    color: "#00A4E4",
    github: "https://github.com/cvardhan501/CampusConnect",
    live: "https://campus-connect-kiro.vercel.app",
    featured: true,
  },
  {
    id: "airdropx",
    title: "AirDropX",
    description:
      "An offline P2P file sharing web app utilizing WebRTC for seamless local Wi-Fi device discovery and high-speed data transfer without internet connection.",
    category: "Web Engineering · P2P",
    tags: ["WebRTC", "P2P", "Next.js", "Tailwind CSS"],
    color: "#06B6D4",
    github: "https://github.com/cvardhan501/FTP",
    live: "https://ftp-three.vercel.app/",
  },
  {
    id: "ai-healthmate",
    title: "HealthMate AI",
    description:
      "An AI symptom-triage assistant that pairs a fine-tuned NLP model with a doctor-matching engine and encrypted health records.",
    category: "AI/ML · Healthcare",
    tags: ["Python", "TensorFlow", "FastAPI", "MongoDB"],
    color: "#10B981",
    github: "https://github.com/cvardhan501/HealthMate-AI",
    live: "https://healthmate-ai-zndt.onrender.com",
  },
  {
    id: "finlytics",
    title: "Finlytics",
    description:
      "A real-time personal finance dashboard with predictive spend analytics, budget alerts, and investment tracking rendered through interactive charts.",
    category: "Fintech · Full-Stack",
    tags: ["Next.js", "MongoDB", "Chart.js", "JWT"],
    color: "#F5C242",
    github: "https://github.com/cvardhan501/FINLYTICS",
    live: "https://finlytics-blue.vercel.app/",
  },
  {
    id: "my-vault",
    title: "My Vault",
    description:
      "A highly secure personal digital vault for centralizing and managing sensitive records, credentials, and encrypted documents featuring 256-bit encryption and 2FA support.",
    category: "Security · Web Application",
    tags: ["Next.js", "Node.js", "MongoDB", "256-bit Encryption"],
    color: "#3B82F6",
    isPrivateRepo: true,
    live: "https://my-vault-six.vercel.app",
  },
  {
    id: "weather-app",
    title: "Nimbus Weather App",
    description:
      "A minimal, beautifully animated weather companion with hyperlocal forecasting, air-quality overlays, and fluid responsive animations.",
    category: "Frontend · API Integration",
    tags: ["React", "OpenWeather API", "Framer Motion", "Tailwind CSS"],
    color: "#8B5CF6",
    github: "https://github.com/cvardhan501/nimbus-weather-app",
    live: "https://nimbus-weather-app-seven.vercel.app",
  },
  {
    id: "scfc-grade-calculator",
    title: "SCFC Grade Calculator",
    description:
      "A premium academic grade calculator enabling SCFC students to compute SGPA and CGPA with dynamic course selection, automatic credit mapping, and live calculations.",
    category: "EdTech · Tools",
    tags: ["JavaScript", "HTML5", "CSS3", "Glassmorphism", "Local Storage"],
    color: "#6C63FF",
    github: "https://github.com/cvardhan501/SCFC",
    live: "https://scfc-grade-cal.vercel.app/",
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description:
      "A modern, responsive recreation of the retro arcade classic built with fluid canvas animations, real-time score tracking, and persistent high scores via local storage.",
    category: "Game Dev · Interactive",
    tags: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Local Storage"],
    color: "#EC4899",
    github: "https://github.com/cvardhan501/snake-game",
    live: "https://snake-game-tpfk.onrender.com",
  },
  {
    id: "meghanas-kitchen",
    title: "Meghana's Kitchen",
    description:
      "A boutique restaurant ordering platform with live table availability, recipe storytelling pages, and a Cloudinary-backed gallery of signature dishes.",
    category: "Full-Stack · Restaurant Platform",
    tags: ["React", "Node.js", "Express", "Cloudinary"],
    color: "#FF6A3D",
    github: "https://github.com/cvardhan501/meghanas-kitchen-men",
    live: "https://meghanas-kitchen-3dmenu.vercel.app/",
  },
];

export const freelanceProjects: Project[] = [
  {
    id: "luxury-gold-shop",
    title: "Luxury Gold Shop Webpage",
    description:
      "A sophisticated high-end jewelry e-commerce showcase featuring a live gold rate ticker, filterable item catalogs, and elegant visual animations.",
    category: "Freelance",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#F5C242",
    github: "https://github.com/cvardhan501/gold",
    live: "https://gold-delta-murex.vercel.app/",
  },
  {
    id: "digital-menu",
    title: "Digital Restaurant Menu",
    description:
      "An interactive, responsive digital menu card featuring category filtering, live search, and smooth animations for a premium dining experience.",
    category: "Freelance",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#8B5CF6",
    github: "https://github.com/cvardhan501/meghanas-kitchen-men",
    live: "https://meghanas-kitchen-3dmenu.vercel.app/",
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS Dashboard",
    description:
      "A high-performance Point of Sale dashboard optimized for speed, featuring real-time bill calculations, table tracking, and dynamic order management.",
    category: "Freelance",
    tags: ["Next.js", "Tailwind CSS", "State Management"],
    color: "#10B981",
    github: "https://github.com/cvardhan501/meghanas-kitchen-pos",
    live: "https://meghanas-kitchen-pos.vercel.app/",
  },
  {
    id: "monolith-gym-1",
    title: "Gym Landing Page Theme-1",
    description:
      "A premium 3D fitness website featuring cinematic hero animations, interactive training programs, GSAP-powered scroll effects, glassmorphism UI, and immersive luxury gym branding.",
    category: "Freelance",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
    ],
    color: "#FF6A3D",
    github: "https://github.com/cvardhan501/Gym-page1",
    live: "https://gym-1-rouge.vercel.app/",
  },
  {
    id: "monolith-gym-2",
    title: "Gym Landing Page Theme-2",
    description:
      "A premium 3D fitness website featuring cinematic hero animations, interactive training programs, GSAP-powered scroll effects, glassmorphism UI, and immersive luxury gym branding.",
    category: "Freelance",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
    ],
    color: "#FF6A3D",
    live: "https://gym-2-jade.vercel.app/",
  },
  {
    id: "monolith-gym-3",
    title: "Gym Landing Page Theme-3",
    description:
      "A premium 3D fitness website featuring cinematic hero animations, interactive training programs, GSAP-powered scroll effects, glassmorphism UI, and immersive luxury gym branding.",
    category: "Freelance",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "React Three Fiber",
    ],
    color: "#FF6A3D",
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
  type: "Professional" | "Course Completion" | "Event Participation";
  credentialUrl?: string;
  credentialId?: string;
}

export const certificates: Certificate[] = [
  {
    id: "c-aws-ml-ai",
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training & Certification",
    year: "2026",
    color: "#FF9900",
    image: "/images/aws-ml-ai-certificate.png",
    issueDate: "August 08, 2026",
    type: "Professional",
  },
  {
    id: "c-gemini-certified-student",
    title: "Gemini Certified Student",
    issuer: "Google for Education",
    year: "2026",
    color: "#4285F4",
    image: "/images/gemini-certified-student.png",
    issueDate: "August 21, 2026",
    type: "Professional",
  },
  {
    id: "c-postman-api",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2026",
    color: "#FF6C37",
    image: "/images/postman-api-fundamentals.png",
    issueDate: "January 08, 2026",
    type: "Professional",
  },
  {
    id: "c-data-analytics-sim",
    title: "Data Analytics Job Simulation",
    issuer: "Forage / Accenture",
    year: "2026",
    color: "#EC4899",
    image: "/images/data-analytics-job-simulation.png",
    issueDate: "August 28, 2026",
    type: "Course Completion",
  },
  {
    id: "c-cyber-job-sim",
    title: "Cybersecurity Job Simulation",
    issuer: "Forage / Mastercard",
    year: "2026",
    color: "#06B6D4",
    image: "/images/cyber-job-simulation.png",
    issueDate: "August 24, 2026",
    type: "Course Completion",
  },
  {
    id: "c-be10x-ai-tools",
    title: "AI Tools and ChatGPT Workshop",
    issuer: "be10x",
    year: "2026",
    color: "#8B5CF6",
    image: "/images/be10x-ai-tools-workshop.jpg",
    issueDate: "May 31, 2026",
    type: "Course Completion",
  },
  {
    id: "c-aws-community-day",
    title: "AWS Student Community Day Bengaluru 2026",
    issuer: "Amity University & AWS Cloud Club",
    year: "2026",
    color: "#00A4E4",
    image: "/images/aws-community-day-bengaluru.png",
    issueDate: "August 01, 2026",
    type: "Event Participation",
  },
  {
    id: "c-aub-sih-2025",
    title: "AUB Smart India Hackathon 2025",
    issuer: "Amity University & SIH",
    year: "2025",
    color: "#10B981",
    image: "/images/aub-smart-india-hackathon-2025.png",
    issueDate: "September 25, 2025",
    type: "Event Participation",
  },
];

export interface Achievement {
  id: string;
  title: string;
  category: string;
  recognition: string;
  description: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  icon: "trophy" | "academic";
  accentColor: string;
  badge: string;
  metrics?: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  academicProgress?: {
    program: string;
    institution: string;
    sem1SGPA: number;
    sem2SGPA: number;
    improvement: string;
  };
}

export const achievements: Achievement[] = [
  {
    id: "kiro-university-challenge",
    title: "3rd Place — Kiro University Challenge",
    category: "Hackathon Achievement",
    recognition: "Third place on the AWS User Group Madurai leaderboard.",
    description:
      "Recognized for my performance in the Kiro University Challenge, demonstrating practical application development and problem-solving.",
    featured: true,
    image: "/images/kiro-3rd-winner.jpg",
    imageAlt: "AWS User Group Madurai Kiro University Challenge 3rd Place Winners Poster",
    icon: "trophy",
    accentColor: "#F5C242",
    badge: "Featured Hackathon Award",
    metrics: [
      { label: "Recognition", value: "3rd Place Podium", sublabel: "AWS User Group Madurai" },
      { label: "Active Days", value: "11 Active Days", sublabel: "Build-Along Journey" },
      { label: "Builders", value: "140+ Joined", sublabel: "Community Challenge" },
    ],
  },
  {
    id: "academic-excellence-sgpa",
    title: "Academic Excellence — SGPA Improvement",
    category: "Academic Progress",
    recognition: "Amity University Bengaluru — B.Tech in CSE (AI & ML)",
    description:
      "Improved my semester grade point average from 8.42 in Semester 1 to 9.19 in Semester 2, demonstrating academic progress and consistent learning.",
    featured: false,
    icon: "academic",
    accentColor: "#10B981",
    badge: "Academic Growth",
    academicProgress: {
      program: "B.Tech in Computer Science and Engineering (AI & ML)",
      institution: "Amity University Bengaluru",
      sem1SGPA: 8.42,
      sem2SGPA: 9.19,
      improvement: "+0.77 SGPA",
    },
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

export interface GalleryPhoto {
  id: string;
  title: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tall?: boolean;
  color: string;
  image: string;
  photos: GalleryPhoto[];
}

export const gallery: GalleryItem[] = [
  {
    id: "fbc-bengaluru",
    title: "Future Builders Connect — Bengaluru",
    subtitle: "AWS Student Community",
    description:
      "Moments from my experience at the AWS Student Community's Future Builders Connect program in Bengaluru.",
    color: "#FF9900",
    image: "/images/future-builders-connect-01.jpeg",
    photos: [
      {
        id: "fbc-01",
        title: "At the AWS Builder Wall",
        image: "/images/future-builders-connect-01.jpeg",
      },
      {
        id: "fbc-02",
        title: "Thumbs Up at AWS Builder Center",
        image: "/images/future-builders-connect-02.jpeg",
      },
      {
        id: "fbc-03",
        title: "Welcome Swag Kit & Goodies",
        image: "/images/future-builders-connect-03.jpeg",
      },
      {
        id: "fbc-04",
        title: "Exploring the Event Guide",
        image: "/images/future-builders-connect-04.jpeg",
      },
      {
        id: "fbc-05",
        title: "Builder Passport Stamps",
        image: "/images/future-builders-connect-05.jpeg",
      },
      {
        id: "fbc-06",
        title: "Event Venue & Atmosphere",
        image: "/images/future-builders-connect-06.jpeg",
      },
      {
        id: "fbc-07",
        title: "Learn. Build. Neon Showcase",
        image: "/images/future-builders-connect-07.jpeg",
      },
      {
        id: "fbc-08",
        title: "Event Check-In & Attendee Passport",
        image: "/images/future-builders-connect-08.jpeg",
      },
      {
        id: "fbc-09",
        title: "Human Claw Challenge",
        image: "/images/future-builders-connect-09.jpeg",
      },
      {
        id: "fbc-10",
        title: "Human Claw Prize Drop",
        image: "/images/future-builders-connect-10.jpeg",
      },
      {
        id: "fbc-11",
        title: "Connecting with the AWS Community",
        image: "/images/future-builders-connect-11.jpeg",
      },
      {
        id: "fbc-12",
        title: "Celebrating Together",
        image: "/images/future-builders-connect-12.jpeg",
      },
    ],
  },
];

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  description?: string;
  color: string;
  url?: string;
  topics?: string[];
  context?: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "accesslens-ai",
    title: "AccessLens AI: Civic Access Auditor",
    date: "October 23, 2026",
    excerpt:
      "Learn how I built an evidence-driven accessibility auditing agent for civic websites using Playwright, axe-core, FastAPI, SQLite, and Strands Decider 2B.",
    description:
      "Learn how I built an evidence-driven accessibility auditing agent for civic websites using Playwright, axe-core, FastAPI, SQLite, and Strands Decider 2B.",
    topics: ["AWS", "Agentic AI", "Web Accessibility"],
    context: "AWS Agent Experience Hackathon",
    url: "https://builder.aws.com/content/3L6RxO6AC0EYOLVSM4cKemw7IDX/accesslens-ai-civic-accessibility-auditing-with-strands-decider-2b",
    color: "#FF9900",
    image: "/images/accesslens-ai-cover.png",
  },
];

export const stats = [
  { label: "Projects", value: 16, suffix: "+" },
  { label: "Technologies", value: 14, suffix: "+" },
  { label: "Certificates", value: 6, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
];
