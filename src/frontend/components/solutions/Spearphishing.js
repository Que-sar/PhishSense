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
          Equip your organization with the fundamental line of defense against
          phishing. Our General Phishing Assessment tests your team's reflexes
          against broad-scale phishing attacks, employing simulated phishing
          emails that lead to a safe but realistic landing page. We analyze the
          response and provide a detailed report to highlight your security
          posture and areas for improvement.
        </div>
      </div>
    </div>
  );
};

export default Spearphishing;
