import React from "react";
import "./Styles.css";
import "./Navbar.css"

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Hackathon</h2>
      <ul className="nav-links">
        <li><button onClick={() => handleScroll("home")}>Home</button></li>
        <li><button onClick={() => handleScroll("about-container")}>About</button></li>
        <li><button onClick={() => handleScroll("schedule")}>Schedule</button></li>
        <li><button onClick={() => handleScroll("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
