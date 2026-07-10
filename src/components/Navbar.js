import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV_LINKS.find((l) => l.href.slice(1) === entry.target.id);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((label) => {
    setActive(label);
    setMenuOpen(false);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="banner"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-inner">
        <a href="#home" className="nav-logo" aria-label="Cyrus, home">
          <span className="nav-logo-bracket">&lt;/&gt;</span>
          <span className="nav-logo-text">
            Cyrus<span className="nav-logo-dot">.</span>
          </span>
        </a>

        <nav className="nav-center" aria-label="Main navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={active === link.label ? "active" : ""}
                  aria-current={active === link.label ? "page" : undefined}
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                  <span className="nav-underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk
          <FiMessageCircle aria-hidden="true" />
        </a>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <nav
        className={`nav-mobile ${menuOpen ? "nav-mobile--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={active === link.label ? "active" : ""}
                onClick={() => handleNavClick(link.label)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;
