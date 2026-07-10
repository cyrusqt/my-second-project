import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiGrid, FiArrowRight, FiGithub } from "react-icons/fi";
import "./Project.css";

function PortfolioMockup() {
  return (
    <svg viewBox="0 0 400 320" className="project-mockup" aria-hidden="true">
      <rect width="400" height="320" fill="#0b1224" />
      <rect width="400" height="28" fill="#141b2e" />
      <circle cx="16" cy="14" r="4" fill="#ef4444" />
      <circle cx="32" cy="14" r="4" fill="#eab308" />
      <circle cx="48" cy="14" r="4" fill="#22c55e" />
      <rect x="30" y="60" width="130" height="18" rx="9" fill="#3b82f6" opacity="0.15" />
      <rect x="42" y="65" width="70" height="8" rx="4" fill="#3b82f6" opacity="0.7" />
      <rect x="30" y="102" width="230" height="26" rx="4" fill="#ffffff" />
      <rect x="30" y="136" width="170" height="26" rx="4" fill="#3b82f6" />
      <rect x="30" y="188" width="170" height="9" rx="4.5" fill="#94a3b8" opacity="0.5" />
      <rect x="30" y="204" width="200" height="9" rx="4.5" fill="#94a3b8" opacity="0.4" />
      <rect x="30" y="236" width="112" height="34" rx="17" fill="#3b82f6" />
      <rect x="154" y="236" width="96" height="34" rx="17" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      <circle cx="330" cy="180" r="60" fill="#3b82f6" opacity="0.08" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <svg viewBox="0 0 400 320" className="project-mockup" aria-hidden="true">
      <rect width="400" height="320" fill="#0b1224" />
      <rect width="76" height="320" fill="#101a30" />
      <circle cx="38" cy="34" r="10" fill="#3b82f6" opacity="0.8" />
      <rect x="24" y="70" width="28" height="6" rx="3" fill="#3b82f6" opacity="0.6" />
      <rect x="24" y="94" width="28" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
      <rect x="24" y="118" width="28" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
      <rect x="24" y="142" width="28" height="6" rx="3" fill="#94a3b8" opacity="0.4" />

      <rect x="96" y="24" width="130" height="12" rx="6" fill="#ffffff" opacity="0.85" />
      <circle cx="370" cy="30" r="14" fill="#3b82f6" opacity="0.5" />

      <rect x="96" y="60" width="88" height="66" rx="12" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.25" />
      <rect x="110" y="76" width="30" height="8" rx="4" fill="#3b82f6" opacity="0.7" />
      <rect x="110" y="94" width="50" height="14" rx="4" fill="#ffffff" opacity="0.9" />

      <rect x="196" y="60" width="88" height="66" rx="12" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.25" />
      <rect x="210" y="76" width="30" height="8" rx="4" fill="#22c55e" opacity="0.7" />
      <rect x="210" y="94" width="50" height="14" rx="4" fill="#ffffff" opacity="0.9" />

      <rect x="296" y="60" width="88" height="66" rx="12" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.25" />
      <rect x="310" y="76" width="30" height="8" rx="4" fill="#eab308" opacity="0.7" />
      <rect x="310" y="94" width="50" height="14" rx="4" fill="#ffffff" opacity="0.9" />

      <rect x="96" y="150" width="288" height="140" rx="14" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.2" />
      <polyline
        points="112,250 150,220 188,236 226,190 264,206 302,170 340,182 368,160"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="112" y="256" width="24" height="16" fill="#3b82f6" opacity="0.35" />
      <rect x="150" y="240" width="24" height="32" fill="#3b82f6" opacity="0.35" />
      <rect x="188" y="248" width="24" height="24" fill="#3b82f6" opacity="0.35" />
      <rect x="226" y="220" width="24" height="52" fill="#3b82f6" opacity="0.35" />
      <rect x="264" y="230" width="24" height="42" fill="#3b82f6" opacity="0.35" />
      <rect x="302" y="200" width="24" height="72" fill="#3b82f6" opacity="0.35" />
    </svg>
  );
}

function FlutterMockup() {
  return (
    <svg viewBox="0 0 400 320" className="project-mockup" aria-hidden="true">
      <rect width="400" height="320" fill="#0b1224" />

      <g transform="translate(58,58) rotate(-8)">
        <rect width="90" height="180" rx="16" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.3" />
        <rect x="10" y="16" width="70" height="10" rx="5" fill="#94a3b8" opacity="0.5" />
        <rect x="10" y="36" width="70" height="46" rx="8" fill="#3b82f6" opacity="0.25" />
        <rect x="10" y="90" width="70" height="10" rx="5" fill="#94a3b8" opacity="0.4" />
        <rect x="10" y="106" width="45" height="8" rx="4" fill="#94a3b8" opacity="0.3" />
      </g>

      <g transform="translate(155,34)">
        <rect width="100" height="220" rx="20" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="10" y="14" width="80" height="8" rx="4" fill="#94a3b8" opacity="0.5" />
        <circle cx="50" cy="42" r="18" fill="#3b82f6" opacity="0.3" />
        <rect x="12" y="70" width="76" height="36" rx="8" fill="#3b82f6" opacity="0.2" />
        <rect x="12" y="114" width="76" height="36" rx="8" fill="#3b82f6" opacity="0.15" />
        <rect x="12" y="158" width="76" height="36" rx="8" fill="#3b82f6" opacity="0.1" />
        <rect x="10" y="200" width="80" height="10" rx="5" fill="#3b82f6" opacity="0.6" />
      </g>

      <g transform="translate(258,60) rotate(8)">
        <rect width="90" height="180" rx="16" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.3" />
        <circle cx="45" cy="40" r="20" fill="#3b82f6" opacity="0.25" />
        <rect x="15" y="72" width="60" height="9" rx="4.5" fill="#94a3b8" opacity="0.5" />
        <rect x="15" y="90" width="60" height="9" rx="4.5" fill="#94a3b8" opacity="0.35" />
        <rect x="15" y="112" width="60" height="30" rx="8" fill="#3b82f6" opacity="0.2" />
      </g>
    </svg>
  );
}

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing my projects, skills, and experience built using Next.js and Tailwind CSS.",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
    Visual: PortfolioMockup,
  },
  {
    title: "Barangay Care System",
    description:
      "A web-based healthcare management system for barangay clinics with appointment scheduling, patient records, and reporting.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
    Visual: DashboardMockup,
  },
  {
    title: "Flutter Mobile Application",
    description:
      "A cross-platform Flutter application with modern UI, REST API integration, authentication, and responsive mobile experience.",
    stack: ["Flutter", "Dart", "REST API", "Firebase"],
    github: "#",
    demo: "#",
    Visual: FlutterMockup,
  },
];

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectCard({ project }) {
  const { title, description, stack, github, demo, Visual } = project;
  return (
    <motion.article
      className="project-card"
      variants={cardItem}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="project-image">
        <Visual />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <motion.div
          className="project-badges"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {stack.map((tech) => (
            <motion.span
              key={tech}
              className="project-badge"
              variants={cardItem}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <div className="project-actions">
          <motion.a
            href={github}
            className="project-btn project-btn-outline"
            aria-label={`View ${title} source code on GitHub`}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </motion.a>

          <motion.a
            href={demo}
            className="project-btn project-btn-primary"
            aria-label={`View live demo of ${title}`}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            Live Demo
            <FiArrowRight aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

function Project() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg" aria-hidden="true">
        <span className="projects-glow projects-glow-1" />
        <span className="projects-glow projects-glow-2" />
      </div>

      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="projects-header">
          <div className="projects-heading-row">
            <FiBriefcase className="projects-icon" aria-hidden="true" />
            <h2>
              Featured <span className="projects-accent">Projects</span>
            </h2>
          </div>

          <span className="projects-dots" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} />
            ))}
          </span>
        </div>
        <span className="projects-underline" />

        <motion.div
          className="projects-grid"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          className="view-all-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <FiGrid aria-hidden="true" />
          View All Projects
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Project;
