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
    <div className="hero-section">
      <div className="hero-action">
        <div className="hero-title">
          Know your security,
          <br />
          empower yourself.
        </div>
        <div className="hero-description">
          Enhance your team's resilience against email threats with our
          personalized, affordable testing programs, aimed at boosting security
          awareness.{" "}
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
    </div>
  );
};

export default Hero;
