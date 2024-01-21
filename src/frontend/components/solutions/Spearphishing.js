import React from "react";
import "./Spearphishing.css";
import SpearPhishImage from "../images/solutionimagery/spearphishing.png";

const Spearphishing = () => {
  return (
    <div className="spearphishing-phishing-container">
      <div className="spearphishing-phishing-title">
        Spear Phishing Assessment
      </div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={SpearPhishImage}
            className="solution-image-spearphishing"
            alt="Spear Phishing"
          />
        </div>
        <div className="solution-text spearphishing-text-description">
          Our Spear Phishing Assessment targets each individual with a
          personalized email, designed to test and strengthen specific security
          awareness.
          <br /> <br />
          Our varied landing pages enhance the realism of the simulation, while
          optional in-depth investigations offer a comprehensive analysis.
          <br /> <br />
          Detailed reporting concludes the exercise, providing actionable
          insights.
        </div>
      </div>
    </div>
  );
};

export default Spearphishing;
