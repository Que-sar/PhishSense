import React from "react";
import "./Whaling.css";
import WhalePhishImage from "../images/solutionimagery/whaling.png";

const Whaling = () => {
  return (
    <div className="whaling-phishing-container">
      <div className="whaling-phishing-title">Whaling Assessment</div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={WhalePhishImage}
            className="solution-image-whaling"
            alt="Whaling"
          />
        </div>
        <div className="solution-text whaling-text-description">
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

export default Whaling;
