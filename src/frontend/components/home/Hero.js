import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../images/heroImage.png";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-action">
        <div className="hero-title">
          Sense your security,
          <br />
          empower yourself.
        </div>
        <div className="hero-description">
          Build natural resistance against malicious emails through a
          comprehensive training and certification program.
        </div>
        <div className="hero-call-to-action">
          <button className="hero-action-button">Get started</button>
          <Link to="/demo" className="hero-tryout-button">
            Try it Free
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
