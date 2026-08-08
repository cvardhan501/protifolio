"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap, Code } from "lucide-react";
import { certificates, experience, projects } from "@/lib/data";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black">
      {/* Top Action Bar (Hidden when printing) */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-4 print:hidden">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-400 hover:bg-amber-500/20 transition-all cursor-pointer"
            >
              <Printer size={15} /> Print / Save as PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Official Resume Document */}
      <main className="mx-auto max-w-4xl p-6 md:p-12 print:p-0 print:max-w-none">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:p-12 shadow-2xl print:border-none print:bg-transparent print:p-0 print:shadow-none">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <h1 className="text-3xl font-bold tracking-tight text-white print:text-slate-900 md:text-4xl">
              C VISHNU VARDHAN
            </h1>
            <p className="mt-1 text-base font-semibold text-amber-400 print:text-amber-700">
              AI &amp; Full Stack Developer | B.Tech CSE (AI &amp; ML) Student
            </p>
            
            {/* Contact info */}
            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 print:text-slate-700">
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-amber-400 print:text-slate-700" /> cvardhan501@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-amber-400 print:text-slate-700" /> +91 9483051598
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-amber-400 print:text-slate-700" /> Bengaluru, Karnataka, India
              </span>
              <a href="https://github.com/cvardhan501" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-amber-400">
                <Github size={13} className="text-amber-400 print:text-slate-700" /> github.com/cvardhan501
              </a>
              <a href="https://www.linkedin.com/in/c-vishnu-vardhan-3435a5240" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-amber-400">
                <Linkedin size={13} className="text-amber-400 print:text-slate-700" /> linkedin.com/in/c-vishnu-vardhan-3435a5240
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800">
              Professional Summary
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 print:text-slate-800">
              Aspiring AI &amp; Full Stack Developer and B.Tech CSE (AI &amp; ML) student at Amity University Bengaluru. 
              Skilled in engineering modern web applications using React, Next.js, TypeScript, Node.js, Express, and MongoDB, 
              combined with practical experience in Python, Machine Learning models, AI tools, and REST API development. Proven hackathon winner with experience building real-world digital platforms.
            </p>
          </div>

          {/* Education */}
          <div className="mt-8 border-t border-slate-800/80 pt-6 print:border-slate-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800">
              <GraduationCap size={15} /> Education
            </div>
            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="text-base font-semibold text-white print:text-slate-900">
                  B.Tech in Computer Science &amp; Engineering (AI &amp; ML)
                </h3>
                <span className="font-mono text-xs text-amber-400 print:text-slate-700">2025 — Present</span>
              </div>
              <p className="text-sm font-medium text-slate-400 print:text-slate-700">Amity University Bengaluru</p>
              <p className="mt-1 text-xs text-slate-400 print:text-slate-600">
                Specialization: Artificial Intelligence, Machine Learning, Data Structures &amp; Algorithms, Software Engineering, Web Applications &amp; Cloud Systems.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-8 border-t border-slate-800/80 pt-6 print:border-slate-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800">
              <Code size={15} /> Core Technical Skills
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-slate-300 print:text-slate-800">
              <div>
                <strong className="text-white print:text-slate-900">Frontend:</strong> React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5 &amp; CSS3, Framer Motion
              </div>
              <div>
                <strong className="text-white print:text-slate-900">Backend:</strong> Node.js, Express.js, MongoDB, RESTful APIs, JSON Web Tokens (JWT)
              </div>
              <div>
                <strong className="text-white print:text-slate-900">AI &amp; Data:</strong> Python, Machine Learning Fundamentals, AI Tools Integration &amp; Prompt Engineering
              </div>
              <div>
                <strong className="text-white print:text-slate-900">Tools &amp; Platforms:</strong> Git, GitHub, Postman API, VS Code, Vercel, Render
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-8 border-t border-slate-800/80 pt-6 print:border-slate-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800">
              <Briefcase size={15} /> Experience &amp; Industry Roles
            </div>
            <div className="mt-3 space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold text-white print:text-slate-900 text-sm">{exp.role}</h3>
                    <span className="font-mono text-amber-400 print:text-slate-700">{exp.year}</span>
                  </div>
                  <p className="text-slate-400 font-medium print:text-slate-700">{exp.company}</p>
                  <p className="mt-1 text-slate-300 print:text-slate-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="mt-8 border-t border-slate-800/80 pt-6 print:border-slate-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800">
              <Code size={15} /> Selected Featured Projects
            </div>
            <div className="mt-3 space-y-3">
              {/* SCFC Grade Calculator */}
              <div className="text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-white print:text-slate-900 text-sm">SCFC Grade Calculator</span>
                  <span className="font-mono text-slate-400 print:text-slate-600">HTML5 • CSS3 • JavaScript • Glassmorphism</span>
                </div>
                <p className="mt-0.5 text-slate-300 print:text-slate-700 leading-relaxed">
                  Academic SGPA &amp; CGPA calculator built with a responsive glassmorphism UI, dynamic course selection, automatic credit mapping, live calculations, and local storage persistence.
                </p>
              </div>

              {/* Finlytics */}
              <div className="text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-white print:text-slate-900 text-sm">Finlytics</span>
                  <span className="font-mono text-slate-400 print:text-slate-600">Next.js • MongoDB • Chart.js • JWT</span>
                </div>
                <p className="mt-0.5 text-slate-300 print:text-slate-700 leading-relaxed">
                  Real-time personal finance dashboard with predictive spend analytics, budget alerts, and investment tracking rendered through interactive glass charts.
                </p>
              </div>

              {/* AI HealthMate */}
              <div className="text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-white print:text-slate-900 text-sm">AI HealthMate</span>
                  <span className="font-mono text-slate-400 print:text-slate-600">Python • TensorFlow • FastAPI • MongoDB</span>
                </div>
                <p className="mt-0.5 text-slate-300 print:text-slate-700 leading-relaxed">
                  AI symptom-triage assistant pairing NLP models with a doctor-matching engine and encrypted health record management.
                </p>
              </div>

              {/* Meghana's Kitchen */}
              <div className="text-xs">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-white print:text-slate-900 text-sm">Meghana&apos;s Kitchen</span>
                  <span className="font-mono text-slate-400 print:text-slate-600">React • Node.js • Express • Cloudinary</span>
                </div>
                <p className="mt-0.5 text-slate-300 print:text-slate-700 leading-relaxed">
                  Interactive restaurant digital ordering platform featuring live table availability, recipe storytelling, and media gallery.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Certificates & Credentials */}
          <div className="mt-8 border-t border-slate-800/80 pt-6 print:border-slate-300">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 print:text-amber-800">
              <Award size={15} /> Verified Credentials &amp; Achievements
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs">
              {certificates.map((cert) => (
                <div key={cert.id} className="rounded-lg border border-slate-800/60 bg-slate-950/40 p-2.5 print:border-slate-300 print:bg-transparent">
                  <p className="font-semibold text-white print:text-slate-900">{cert.title}</p>
                  <p className="text-slate-400 print:text-slate-700">{cert.issuer} • <span className="text-amber-400 print:text-slate-800">{cert.issueDate || cert.year}</span></p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
