import React from "react";
import "./Quishing.css";
import QuishImage from "../images/solutionimagery/quishing.png";

const Quishing = () => {
  return (
    <div className="quishing-phishing-container">
      <div className="quishing-phishing-title">
        Quishing (QR Code Phishing) Assessment
      </div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={QuishImage}
            className="solution-image-quishing"
            alt="Whaling"
          />
        </div>
        <div className="solution-text quishing-text-description">
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

export default Quishing;
