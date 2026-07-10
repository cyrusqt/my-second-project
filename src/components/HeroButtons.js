import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import "./HeroButtons.css";

function HeroButtons() {
  return (
    <div className="hero-buttons">
      <motion.a
        href="#projects"
        className="btn btn-primary"
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        View Projects
        <FiArrowRight aria-hidden="true" />
      </motion.a>

      <motion.a
        href="#contact"
        className="btn btn-outline"
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        Contact Me
        <FiMail aria-hidden="true" />
      </motion.a>
    </div>
  );
}

export default HeroButtons;
