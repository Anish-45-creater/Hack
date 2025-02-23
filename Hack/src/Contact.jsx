import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="heading">Contact Us</h2>

<div className="container">
  <p className="content">
    This hackathon is conducted by Google Students' Club, a co-curricular forum in 
    Mepco Schlenk Engineering College.<br /><br />
    This event is conducted to test students' skills in problem-solving, coding, etc.<br /><br />
    This hackathon is exclusively for the members of GSC.
  </p>

  <h3 className="center-text">Get out of your comfort zone to win this!</h3>

  <h1 className="query-text">
    For any queries: Mail to <a href="mailto:gsc@mepcoeng.ac.in">gsc@mepcoeng.ac.in</a>
  </h1>
</div>

    </section>
  );
};

export default Contact;
