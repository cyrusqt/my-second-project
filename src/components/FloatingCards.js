import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSettings } from "react-icons/fi";
import "./FloatingCards.css";

const CARDS = [
  { className: "card-lines", Icon: null, delay: 0, duration: 5 },
  { className: "card-code", Icon: FiCode, delay: 0.4, duration: 6 },
  { className: "card-braces", Icon: null, delay: 0.8, duration: 5.5 },
  { className: "card-gear", Icon: FiSettings, delay: 1.2, duration: 6.5 },
];

function FloatingCards() {
  return (
    <div className="floating-cards" aria-hidden="true">
      {CARDS.map(({ className, Icon, delay, duration }, i) => (
        <motion.div
          key={className}
          className={`floating-card ${className}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 + delay, ease: "easeOut" },
            y: { duration, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          {className === "card-lines" && (
            <div className="card-lines-inner">
              <span />
              <span />
              <span />
            </div>
          )}
          {className === "card-code" && <FiCode aria-hidden="true" />}
          {className === "card-braces" && <span className="braces-text">{"{ }"}</span>}
          {className === "card-gear" && <FiSettings aria-hidden="true" />}
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingCards;
