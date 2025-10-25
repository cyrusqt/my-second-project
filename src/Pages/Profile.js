import React, { useEffect, useState } from "react";
import profile from "../assets/Profile.jpg";
import "./Profile.css";

function Profile({
  name = "Cyrus Vincent Lauron",
  title = "Web Developer",
  bio = "I  build accessible, responsive UI with CSS, HTML, and React.",
  skills = ["React", "HTML", "CSS", "Accessibility"],
  email = "clauron.king@gmail.com",
}) {
  const [typedBio, setTypedBio] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bio.length) {
        setTypedBio((prev) => prev + bio.charAt(index)); 
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); 
    return () => clearInterval(interval);
  }, [bio]);

  return (
    <section
      className="Profile"
      style={{
        background: `url(${profile}) center/cover no-repeat`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textShadow: "0 2px 8px rgba(0,0,0,0.8)",
        padding: "2rem",
      }}
    >
      <div
        className="profile-body"
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "2rem",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <div className="avatar">
          <img src={profile} alt={`${name}'s profile`} />
        </div>

        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        <p className="profile-bio" style={{ whiteSpace: "pre-wrap" }}>
          {typedBio}
        </p>

        <ul className="profile-skills" aria-label="Skills">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="profile-actions">
          <a className="btn" href={`mailto:${email}`}>
            Email
          </a>
          <a className="btn btn-outline" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
