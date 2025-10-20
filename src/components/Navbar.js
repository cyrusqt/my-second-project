import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar" role="banner">
            <nav className="nav-links" role="navigation" aria-label="Main navigation">
                <button
                    className="menu-toggle"
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((s) => !s)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul className={`links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="logo">PRTFLIO</div>            
        </header>       
    );   
}

export default Navbar;