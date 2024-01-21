import React from "react";
import "./Smishing.css";
import Smishimage from "../images/solutionimagery/smishing.png";

const Smishing = () => {
  return (
    <div className="smishing-phishing-container">
      <div className="smishing-phishing-title">
        Smishing (SMS Phishing) Assessment
      </div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={Smishimage}
            className="solution-image-smishing"
            alt="Smishing"
          />
        </div>
        <div className="solution-text smishing-text-description">
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

export default Smishing;
