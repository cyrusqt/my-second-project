import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-image"></div>
            <div className="about-content">
                <h2>About Me</h2>
                <p className="intro">
                    Hi, I'm a passionate frontend developer focused on creating beautiful,
                    accessible, and user-friendly web experiences.
                </p>
                
                <div className="skills-container">
                    <h3>My Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <h4>Frontend</h4>
                            <p>React, HTML5, CSS3, JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <h4>Design</h4>
                            <p>Responsive Design, UI/UX, Accessibility</p>
                        </div>
                        <div className="skill-item">
                            <h4>Tools</h4>
                            <p>Git, VS Code, npm, Webpack</p>
                        </div>
                    </div>
                </div>

                <div className="about-footer">
                    <a href="#contact" className="cta-button">Get in Touch</a>
                </div>
            </div>
        </section>
    );
}

export default About;