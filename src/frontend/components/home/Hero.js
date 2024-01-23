import React from "react";
import HeroImage from "../images/heroImage.webp";

import "./Hero.css";

const Hero = () => {
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
          <button className="hero-action-button">Get in Touch</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
