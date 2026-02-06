"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Pulse Commerce",
    description:
      "A premium storefront experience with lightning checkout and personalized journeys.",
    tags: ["Next.js", "Stripe", "A/B Testing"],
  },
  {
    title: "Lumen Dashboard",
    description:
      "A data-rich analytics panel for growth teams, built around clarity and speed.",
    tags: ["React", "TypeScript", "D3"],
  },
  {
    title: "Orchid Booking",
    description:
      "A booking flow redesign that reduced drop-off and improved mobile conversion.",
    tags: ["UX", "Framer Motion", "Node.js"],
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Git",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="ambient" aria-hidden="true" />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[rgba(10,8,18,0.65)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between">
          <span className="font-display text-lg font-bold tracking-wide">HugoHap</span>
          <ul className="hidden gap-6 text-sm text-white/80 md:flex">
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl pb-20 pt-14 md:pt-20">
        <section className="grid items-center gap-10 md:grid-cols-[1.2fr_.8fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mb-4 inline-block rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-violet-100">
              Web Developer Portfolio
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">
              Building clean products with bold, memorable interfaces.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">
              I design and build modern web experiences focused on performance, conversion, and storytelling.
              This is a demo portfolio structure ready for your real content.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">See Projects</a>
              <a href="#contact" className="btn-outline">Let&apos;s Talk</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-card"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-violet-200/90">Available for freelance</p>
            <p className="mt-3 text-3xl font-bold">Front-end + Product-minded Dev</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="stat-card">
                <span>3+ years</span>
                <p>Building for web</p>
              </div>
              <div className="stat-card">
                <span>12 projects</span>
                <p>Shipped end-to-end</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="project-card"
              >
                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm text-white/70">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="section-title"
          >
            About
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-5 max-w-3xl text-white/75"
          >
            I craft digital experiences where code quality and visual detail matter equally. My workflow combines strong
            front-end architecture with a product-first mindset, so every screen is both fast and meaningful.
          </motion.p>
        </section>

        <section id="skills" className="pt-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="section-title"
          >
            Skills
          </motion.h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.25 }}
                className="chip"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section id="contact" className="pt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="contact-card"
          >
            <h2 className="section-title">Contact</h2>
            <p className="mt-4 text-white/75">
              Want to collaborate on a project or discuss an opportunity? Reach me via email or LinkedIn.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a className="btn-primary" href="mailto:hello@hugohap.dev">Email Me</a>
              <a className="btn-outline" href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
