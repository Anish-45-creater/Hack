import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Footer from "./Footer";
import "./Styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

