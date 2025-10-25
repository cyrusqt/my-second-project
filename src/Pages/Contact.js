import React, { useState } from "react";
import "./Contact.css";
// Add this line if you're not already importing Font Awesome somewhere globally
// import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2>Get in Touch</h2>
                <p className="contact-intro">
                    I'd love to collaborate or hear your ideas — send me a message!
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            required
                            rows="5"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>

                <div className="contact-info">
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>clauron.king@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Follow Me</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/share/1BLVmAhdbq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="facebook">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href="https://instagram.com/cyrusbisinti/" target="_blank" rel="noopener noreferrer" className="instagram">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a href="https://github.com/cyrusqt" target="_blank" rel="noopener noreferrer" className="github">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
