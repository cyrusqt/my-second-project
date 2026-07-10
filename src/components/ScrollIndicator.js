import React from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import "./ScrollIndicator.css";

function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      className="scroll-indicator"
      aria-label="Scroll down to About section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
    >
      <span className="scroll-mouse">
        <span className="scroll-dot" />
      </span>
      <span className="scroll-text">Scroll Down</span>
      <FiChevronDown className="scroll-arrow" aria-hidden="true" />
    </motion.a>
  );
}

export default ScrollIndicator;
