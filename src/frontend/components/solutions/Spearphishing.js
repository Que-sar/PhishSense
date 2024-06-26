import React from "react";
import "./Spearphishing.css";
import SpearPhishImage from "../images/solutionimagery/spearphishing.webp";

const Spearphishing = () => {
  return (
    <section className="spearphishing-phishing-container">
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
          <br /> <br />
          Post-assessment, we offer tailored educational sessions to target
          areas needing heightened security awareness.
        </div>
      </div>
    </section>
  );
};

export default Spearphishing;
