import React from "react";
import bg from "../assets/Profile.jpg"; // <-- fixed casing
import "./Profile.css";

function Profile({
  name = "Cyrus Vincent Lauron",
  title = "Programmer",
  bio = "I build accessible, responsive UI with React and modern CSS.",
  skills = ["React", "HTML", "CSS", "Accessibility"],
  email = "clauron.king@gmail.com",
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section
      className="Profile"
      id="Profile"
      role="region"
      aria-label="Profile"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="avatar" aria-hidden="true">{initials}</div>

      <div className="profile-body">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
        <p className="profile-bio">{bio}</p>

        <ul className="profile-skills" aria-label="Skills">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="profile-actions">
          <a className="btn" href={`mailto:${email}`}>Email</a>
          <a className="btn btn-outline" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Profile;