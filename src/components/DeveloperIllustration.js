import React from "react";
import { motion } from "framer-motion";
import "./DeveloperIllustration.css";

function DeveloperIllustration() {
  return (
    <motion.div
      className="dev-illustration"
      role="img"
      aria-label="Illustration of a developer working at a desk with three monitors and a laptop"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { duration: 0.7, ease: "easeOut" },
        scale: { duration: 0.7, ease: "easeOut" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div className="dev-glow" aria-hidden="true" />
      <svg
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0b1224" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#141b2e" />
            <stop offset="100%" stopColor="#0b1020" />
          </linearGradient>
          <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2436" />
            <stop offset="100%" stopColor="#0e1424" />
          </linearGradient>
        </defs>

        {/* Left monitor */}
        <g transform="translate(70,150)">
          <rect x="0" y="0" width="150" height="105" rx="10" fill="url(#screenGlow)" stroke="#3b82f6" strokeOpacity="0.5" />
          <rect x="14" y="16" width="70" height="6" rx="3" fill="#3b82f6" opacity="0.8" />
          <rect x="14" y="32" width="100" height="5" rx="2.5" fill="#94a3b8" opacity="0.6" />
          <rect x="14" y="46" width="85" height="5" rx="2.5" fill="#94a3b8" opacity="0.5" />
          <rect x="14" y="60" width="60" height="5" rx="2.5" fill="#3b82f6" opacity="0.6" />
          <rect x="14" y="74" width="95" height="5" rx="2.5" fill="#94a3b8" opacity="0.4" />
          <rect x="65" y="105" width="20" height="14" fill="#0b1020" />
          <rect x="40" y="119" width="70" height="6" rx="3" fill="#141b2e" />
        </g>

        {/* Right monitor */}
        <g transform="translate(420,150)">
          <rect x="0" y="0" width="150" height="105" rx="10" fill="url(#screenGlow)" stroke="#3b82f6" strokeOpacity="0.5" />
          <rect x="14" y="16" width="60" height="6" rx="3" fill="#3b82f6" opacity="0.8" />
          <rect x="14" y="32" width="110" height="5" rx="2.5" fill="#94a3b8" opacity="0.6" />
          <rect x="14" y="46" width="70" height="5" rx="2.5" fill="#94a3b8" opacity="0.5" />
          <rect x="14" y="60" width="90" height="5" rx="2.5" fill="#3b82f6" opacity="0.6" />
          <rect x="14" y="74" width="55" height="5" rx="2.5" fill="#94a3b8" opacity="0.4" />
          <rect x="65" y="105" width="20" height="14" fill="#0b1020" />
          <rect x="40" y="119" width="70" height="6" rx="3" fill="#141b2e" />
        </g>

        {/* Center monitor (largest) */}
        <g transform="translate(210,110)">
          <rect x="0" y="0" width="220" height="145" rx="12" fill="url(#screenGlow)" stroke="#3b82f6" strokeOpacity="0.6" strokeWidth="1.5" />
          <rect x="18" y="20" width="90" height="8" rx="4" fill="#3b82f6" />
          <rect x="18" y="40" width="150" height="6" rx="3" fill="#94a3b8" opacity="0.7" />
          <rect x="18" y="56" width="120" height="6" rx="3" fill="#94a3b8" opacity="0.55" />
          <rect x="18" y="72" width="160" height="6" rx="3" fill="#3b82f6" opacity="0.7" />
          <rect x="18" y="88" width="100" height="6" rx="3" fill="#94a3b8" opacity="0.5" />
          <rect x="18" y="104" width="140" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
          <rect x="95" y="145" width="30" height="18" fill="#0b1020" />
          <rect x="60" y="163" width="100" height="8" rx="4" fill="#141b2e" />
        </g>

        {/* Desk */}
        <rect x="20" y="330" width="600" height="16" rx="6" fill="url(#deskGrad)" />
        <rect x="60" y="346" width="16" height="90" fill="#0b1020" />
        <rect x="564" y="346" width="16" height="90" fill="#0b1020" />

        {/* Laptop on desk */}
        <g transform="translate(455,290)">
          <path d="M0 40 L95 40 L110 55 L-15 55 Z" fill="#141b2e" stroke="#3b82f6" strokeOpacity="0.3" />
          <rect x="8" y="0" width="80" height="42" rx="4" fill="url(#screenGlow)" stroke="#3b82f6" strokeOpacity="0.4" />
        </g>

        {/* Coffee mug */}
        <g transform="translate(560,300)">
          <rect x="0" y="10" width="26" height="26" rx="4" fill="#1c2436" stroke="#94a3b8" strokeOpacity="0.3" />
          <path d="M26 16 h8 a6 6 0 0 1 0 12 h-8" fill="none" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="2" />
        </g>

        {/* Plant */}
        <g transform="translate(40,280)">
          <path d="M10 50 C0 20 20 5 25 30 C30 5 50 20 40 50 Z" fill="#1e3a5f" opacity="0.8" />
          <rect x="12" y="48" width="26" height="22" rx="4" fill="#141b2e" />
        </g>

        {/* Chair */}
        <path
          d="M225 200 C205 220 205 260 220 300 L410 300 C425 260 425 220 405 200 Z"
          fill="url(#hoodieGrad)"
          opacity="0.9"
        />

        {/* Person - hoodie from behind */}
        <g>
          <path
            d="M250 230 C250 190 270 160 315 160 C360 160 380 190 380 230 L392 330 L238 330 Z"
            fill="url(#hoodieGrad)"
            stroke="#3b82f6"
            strokeOpacity="0.15"
          />
          <path d="M300 168 C290 175 285 190 288 205 L342 205 C345 190 340 175 330 168 Z" fill="#0e1424" />
          <circle cx="315" cy="172" r="26" fill="#141b2e" />
          <path d="M255 260 C245 270 240 285 245 300 L275 300 L280 255 Z" fill="url(#hoodieGrad)" />
          <path d="M375 260 C385 270 390 285 385 300 L355 300 L350 255 Z" fill="url(#hoodieGrad)" />
        </g>
      </svg>
    </motion.div>
  );
}

export default DeveloperIllustration;
