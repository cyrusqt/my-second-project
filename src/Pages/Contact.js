import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiExternalLink,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "clauron.king@gmail.com",
    Icon: FiMail,
    type: "copy",
  },
  {
    label: "Phone",
    value: "+63 991 118 3153",
    Icon: FiPhone,
    type: "copy",
  },
  {
    label: "Location",
    value: "Tabok Mandaue City, Cebu, Philippines",
    Icon: FiMapPin,
    type: "copy",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/cyrus-vincent-lauron",
    href: "https://linkedin.com",
    Icon: FaLinkedinIn,
    type: "link",
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/cyrusqt", Icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/cyrus-vincent-lauron", Icon: FaLinkedinIn },
  {
    label: "Facebook",
    href: "https://www.facebook.com/GwapoCyrus",
    Icon: FaFacebookF,
  },
  { label: "Instagram", href: "https://instagram.com/cyrusbisinti/", Icon: FaInstagram },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ContactCard({ info }) {
  const { label, value, Icon, href, type } = info;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable, no-op */
    }
  };

  const content = (
    <>
      <span className="contact-card-icon">
        <Icon aria-hidden="true" />
      </span>
      <span className="contact-card-text">
        <span className="contact-card-label">{label}</span>
        <span className="contact-card-value">{value}</span>
      </span>
      {type === "copy" ? (
        <button
          type="button"
          className="contact-card-action"
          aria-label={copied ? `${label} copied` : `Copy ${label}`}
          onClick={handleCopy}
        >
          {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
        </button>
      ) : (
        <span className="contact-card-action" aria-hidden="true">
          <FiExternalLink />
        </span>
      )}
    </>
  );

  if (type === "link") {
    return (
      <motion.a
        className="contact-card"
        variants={item}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div className="contact-card" variants={item} whileHover={{ y: -3 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      {content}
    </motion.div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg" aria-hidden="true">
        <span className="contact-glow contact-glow-1" />
        <span className="contact-glow contact-glow-2" />
        <span className="contact-dots contact-dots-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} />
          ))}
        </span>
        <span className="contact-dots contact-dots-2">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} />
          ))}
        </span>
      </div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contact-grid">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="contact-label">
              <FiSend aria-hidden="true" />
              GET IN TOUCH
            </span>

            <h2>
              Hire <span className="contact-accent">Me</span>
            </h2>
            <span className="contact-underline" />

            <p className="contact-description">
              I'm currently open to new opportunities and exciting projects.
              If you have a question or just want to say hello, feel free to
              reach out to me!
            </p>

            <motion.div
              className="contact-cards"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {CONTACT_INFO.map((info) => (
                <ContactCard key={info.label} info={info} />
              ))}
            </motion.div>

            <div className="contact-social">
              <p>Let's connect on social media</p>
              <ul>
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <Icon aria-hidden="true" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="contact-form-card">
              <h3>Send Me a Message</h3>
              <span className="form-underline" />

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Your Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="contact-submit-btn"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <FiSend aria-hidden="true" />
                  {submitted ? "Message Sent!" : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
