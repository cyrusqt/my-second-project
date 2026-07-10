import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import HeroButtons from "../components/HeroButtons";
import DeveloperIllustration from "../components/DeveloperIllustration";
import FloatingCards from "../components/FloatingCards";
import ScrollIndicator from "../components/ScrollIndicator";
import "./Profile.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Profile() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <span className="glow glow-1" />
        <span className="glow glow-2" />
        <span className="glow glow-3" />
      </div>

      <motion.div
        className="hero-container"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="hero-left">
          <motion.span className="hero-badge" variants={item}>
            <span className="hero-badge-dot" />
            Aspiring Web Developer
          </motion.span>

          <motion.h1 className="hero-heading" variants={item}>
            Hi, I'm <span className="hero-accent">Cyrus.</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={item}>
            Aspiring Web Developer &amp; Flutter Developer
          </motion.p>

          <motion.p className="hero-description" variants={item}>
            Fresh graduate passionate about building responsive websites and
            mobile applications using modern technologies.
          </motion.p>

          <motion.div variants={item}>
            <HeroButtons />
          </motion.div>

          <motion.div variants={item}>
            <SocialIcons />
          </motion.div>
        </div>

        <motion.div className="hero-right" variants={item}>
          <DeveloperIllustration />
          <FloatingCards />
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}

export default Profile;
