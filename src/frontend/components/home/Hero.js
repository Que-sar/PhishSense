import React from "react";
import HeroImage from "../images/heroImage.webp";
import { useNavigate } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  let navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact-us"); // Navigate to the contact-us page
  };
  return (
    <main className="hero-section">
      <div className="hero-action">
        <h1 className="hero-title">
          No vulnerabilities,
          <br />
          no expenses.
        </h1>
        <div className="hero-description">
          Let us hack your business. If we find no vulnerabilities, you pay
          nothing. Get the protection you deserve.
        </div>
        <div className="hero-call-to-action">
          <button className="hero-action-button" onClick={navigateToContact}>
            Get in Touch
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero" />
      </div>
    </main>
  );
};

export default Hero;
