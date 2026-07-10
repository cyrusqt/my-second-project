import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";
import "./SocialIcons.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/", Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedinIn },
  { label: "Facebook", href: "https://facebook.com/", Icon: FaFacebookF },
  { label: "Email", href: "mailto:clauron.king@gmail.com", Icon: FaEnvelope },
];

function SocialIcons() {
  return (
    <ul className="social-icons" aria-label="Social links">
      {SOCIALS.map(({ label, href, Icon }, i) => (
        <li key={label}>
          <motion.a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Icon aria-hidden="true" />
          </motion.a>
        </li>
      ))}
    </ul>
  );
}

export default SocialIcons;
