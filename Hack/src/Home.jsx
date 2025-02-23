import React from "react";
import "./Styles.css";
import img from "./assets/clg.png";

const Home = () => {
  return (
    <section id="home" className="section home">
      <div className="home-wrapper">
        
        <h1 className="college-name">Mepco Schlenk Engineering College</h1>

        <div className="home-container">
        <div className="logo">
          
          <div className="logo-container">
            <img src={img} alt="College Logo" className="college-logo" />
            </div>
          </div>

         
          <div className="content-container">
            <h1>Google Students' Club presents</h1>
            <h2 className="title-highlight">!Hackathon!</h2>
            <a href="https://www.mepcoeng.ac.in" className="register-btn">
              Register Now
            </a>
            <p className="scroll-text">Scroll Down to Know More</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
