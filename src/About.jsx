import React, { useState } from "react";
import "./About.css"; // Ensure you create and style this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";



const About = () => {
  const [show,setShow]=useState(false);
  return (
    <div id="about-container" className="about-container">
      <h1 className="title"> About the Hackathon </h1>
      <p className="description">
        Welcome to the ** Hackathon**! This event is designed to **push your creativity, problem-solving skills, and innovation** to the next level. Compete, collaborate, and create solutions that can make a difference!
      </p>

      <h2 className="rules-title">📜 Hackathon Rules</h2>
      <ul className="rules-list">
        <li>🔹 **Originality** - All projects must be original and not plagiarized.</li>
        <li>🔹 **Team Size** - Teams should consist of 2-4 participants.</li>
        <li>🔹 **Time Limit** - You must submit your project within the given timeframe.</li> 
        <li>🔹 **Code of Conduct** - Maintain professionalism and respect others.</li>
        <li>🔹 **Project Demo** - A short presentation is required for final submission.</li>
      </ul>

      <h2 className="prizes-title">🏆 Prizes & Awards</h2>

      <div className="podium-container">
        {/* 2nd Place */}
        <div className="podium silver">
          <p className="position">🥈 2nd Place</p>
          <FontAwesomeIcon icon={faTrophy} className="trophy-icon silver-trophy" />
          <p className="prize-text"><span id="r2">Rs. 3,000💸</span> </p>
        </div>

        {/* 1st Place (Center) */}
        <div className="podium gold">
          <p className="position">🥇 1st Place</p>
          <FontAwesomeIcon icon={faTrophy} className="trophy-icon gold-trophy" />
          <p className="prize-text"><span id="r1">Rs. 5,000💸</span></p>
        </div>

        {/* 3rd Place */}
        <div className="podium bronze">
          <p className="position">🥉 3rd Place</p>
          <FontAwesomeIcon icon={faTrophy} className="trophy-icon bronze-trophy" />
          <p className="prize-text"><span id="r3">Rs. 1,000💸</span></p>
        </div>
      </div>
      {show ? <><h2 className="rules-title">📝 Problem Statements</h2>
      <ul className="rules-list">
          <li>🔹 **Scope** - Each problem statement should have a clear, defined scope.</li>
          <li>🔹 **Feasibility** - Ensure that the problem can be solved within the hackathon's timeframe and with the available resources.</li>
          <li>🔹 **Innovation** - The solution should bring innovative approaches or ideas to the problem.</li>
          <li>🔹 **Relevance** - The problem should be relevant to current challenges in technology or society.</li>
          <li>🔹 **Impact** - Consider the potential impact of the solution in addressing the problem.</li>
      </ul></> : <><button className="register-btn" onClick={()=>{setShow(true)}}>Show Problem Statements</button></>}

    </div>
  );
};

export default About;
