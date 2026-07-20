// "use client";

// import { motion } from "framer-motion";
// import { Code2, Sparkles, Cpu } from "lucide-react";
// import MagneticButton from "./MagneticButton";

// const HIGHLIGHTS = [
//   { icon: Code2, text: "3+ years building production web apps" },
//   { icon: Cpu, text: "Applied AI features shipped to real users" },
//   { icon: Sparkles, text: "Obsessed with motion, detail & performance" },
// ];

// export default function About() {
//   return (
//     <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
//       <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative mx-auto w-full"
//         >
//           <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-neon/30 blur-xl" />
//           <div className="glass relative aspect-auto overflow-hidden rounded-[2rem] border-gold/30 p-2">
//             <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-void-light to-void">
//               <div className="absolute inset-0 grid-bg opacity-40" />
//               <img src="/images/hero-profile.png" alt="C VISHNU VARDHAN" className="h-full w-full object-cover" />
//               <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-gold/20" />
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//         >
//           <p className="section-label mb-3">About Me</p>
//           <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
//             Engineering meets <span className="text-gradient-gold">Innovation</span>
//           </h2>
//           <p className="mt-6 leading-relaxed text-ink-muted">
//             I'm C VISHNU VARDHAN, an aspiring AI & ML Engineer and Full Stack Developer passionate about building modern digital experiences. I enjoy transforming ideas into responsive web applications, experimenting with artificial intelligence, and creating user interfaces that are fast, intuitive, and visually engaging.
//           </p>
//           <p className="mt-4 leading-relaxed text-ink-muted">
//             As a B.Tech student, I'm continuously learning, building real-world projects, and taking on freelance opportunities to sharpen my skills. My focus is on writing clean, scalable code while exploring how AI and thoughtful design can solve real-world challenges.
//           </p>
//           <p className="mt-4 leading-relaxed text-ink-muted">
//             Beyond development, I enjoy discovering new technologies, analyzing great products, and pushing myself to build software that's not only functional but also enjoyable to use.
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-1">
//             {HIGHLIGHTS.map(({ icon: Icon, text }) => (
//               <div key={text} className="flex items-center gap-3 text-sm text-ink">
//                 <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
//                   <Icon size={16} />
//                 </span>
//                 {text}
//               </div>
//             ))}
//           </div>

//           <MagneticButton className="mt-9 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10">
//             More About Me
//           </MagneticButton>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Cpu } from "lucide-react";
import MagneticButton from "./MagneticButton";

const HIGHLIGHTS = [
  { icon: Code2, text: "3+ years building production web apps" },
  { icon: Cpu, text: "Applied AI features shipped to real users" },
  { icon: Sparkles, text: "Obsessed with motion, detail & performance" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full"
        >
          <div className="absolute inset-0 -m-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-neon/30 blur-xl" />

          <div className="glass relative aspect-auto overflow-hidden rounded-[2rem] border-gold/30 p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-void-light to-void">
              <div className="absolute inset-0 grid-bg opacity-40" />

              <img
                src="/images/hero-profile.png"
                alt="C VISHNU VARDHAN"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-gold/20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="section-label mb-3">About Me</p>

          <h2 className="font-display text-4xl font-semibold text-ink md:text-5xl">
            Engineering meets{" "}
            <span className="text-gradient-gold">Innovation</span>
          </h2>

          <p className="mt-6 leading-relaxed text-ink-muted">
            I&apos;m C VISHNU VARDHAN, an aspiring AI &amp; ML Engineer and Full
            Stack Developer passionate about building modern digital
            experiences. I enjoy transforming ideas into responsive web
            applications, experimenting with artificial intelligence, and
            creating user interfaces that are fast, intuitive, and visually
            engaging.
          </p>

          <p className="mt-4 leading-relaxed text-ink-muted">
            As a B.Tech student, I&apos;m continuously learning, building
            real-world projects, and taking on freelance opportunities to
            sharpen my skills. My focus is on writing clean, scalable code while
            exploring how AI and thoughtful design can solve real-world
            challenges.
          </p>

          <p className="mt-4 leading-relaxed text-ink-muted">
            Beyond development, I enjoy discovering new technologies, analyzing
            great products, and pushing myself to build software that&apos;s not
            only functional but also enjoyable to use.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-1">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-sm text-ink"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                  <Icon size={16} />
                </span>
                {text}
              </div>
            ))}
          </div>

          <MagneticButton className="mt-9 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10">
            More About Me
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}