import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiGrid, FiArrowRight, FiGithub } from "react-icons/fi";
import { FaBitbucket } from "react-icons/fa";
import portfolioScreenshot from "../assets/image.png";
import sinkingFundScreenshot from "../assets/sinkingfund.jpg";
import procrewMobileScreenshot from "../assets/procrewmobile.png";
import "./Project.css";

function PortfolioScreenshot() {
  return (
    <img
      src={portfolioScreenshot}
      alt="Portfolio Website screenshot"
      className="project-mockup"
    />
  );
}

function SinkingFundScreenshot() {
  return (
    <img
      src={sinkingFundScreenshot}
      alt="Sinking Fund Management System screenshot"
      className="project-mockup"
    />
  );
}

function ProCrewMobileScreenshot() {
  return (
    <img
      src={procrewMobileScreenshot}
      alt="Pro Crew Schedule Mobile Application screenshot"
      className="project-mockup"
    />
  );
}

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing my projects, skills, and experience built using Next.js and Tailwind CSS.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Framer Motion"],
    github: "http://github.com/cyrusqt/my-first-react-project",
    demo: "cyrus-portfolio.vercel.app",
    Visual: PortfolioScreenshot,
  },
  {
    title: "Sinking Fund Management System",
    description:
      "A web-based healthcare management system for barangay clinics with appointment scheduling, patient records, and reporting.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/cyrusqt/my-second-project",
    demo: "cyrus-portfolio.vercel.app",
    Visual: SinkingFundScreenshot,
  },
  {
    title: "Pro Crew Schedule Mobile Application",
    description:
      "A cross-platform Flutter application with modern UI, REST API integration, authentication, and responsive mobile experience.",
    stack: ["Flutter", "Dart", "REST API", "Firebase"],
    bitbucket: "#",
    demo: "cyrus-portfolio.vercel.app",
    Visual: ProCrewMobileScreenshot,
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
  const { title, description, stack, github, bitbucket, demo, Visual } = project;
  const repoUrl = bitbucket || github;
  const repoLabel = bitbucket ? "Bitbucket" : "GitHub";
  const RepoIcon = bitbucket ? FaBitbucket : FiGithub;
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
            href={repoUrl}
            className="project-btn project-btn-outline"
            aria-label={`View ${title} source code on ${repoLabel}`}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <RepoIcon aria-hidden="true" />
            {repoLabel}
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
