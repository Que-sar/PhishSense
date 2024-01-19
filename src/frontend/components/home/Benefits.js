import React from "react";

import "./Benefits.css";

import Wave from "../wave/Wave";
import ShieldIcon from "../images/shieldIcon.svg";
import HandshakeIcon from "../images/handshakeIcon.svg";
import ScaleIcon from "../images/scaleIcon.svg";

const Benefits = () => {
  return (
    <>
      <Wave />
      <div className="benefits-section">
        <div className="benefits-title">Benefits</div>
        <div className="benefits-description">
          What we offer to increase your security, elevate your confidence,
          achieve your goals.
        </div>
        <div className="benefits-list">
          <div className="firstBenefit">
            <div className="benefit-item-icon">
              <img src={ShieldIcon} alt="Protection" />
            </div>
            <div>
              <div className="benefit-item-title">Empower Your Security</div>
              <p className="benefit-item-description">
                Acquire habits or test skills to detect and protect against
                phishing, showcasing resilience and gaining a cybersecurity edge
                for businesses of all sizes.
              </p>
            </div>
          </div>

          <div className="secondBenefit">
            <div className="benefit-item-icon">
              <img src={ScaleIcon} alt="Protection" />
            </div>
            <div>
              <div className="benefit-item-title">
                Enhance Vigilence Affordably
              </div>
              <p className="benefit-item-description">
                Strengthen your defenses economically with targeted phishing
                simulations, yielding custom insights for strategic
                cybersecurity improvements.
              </p>
            </div>
          </div>

          <div className="thirdBenefit">
            <div className="benefit-item-icon">
              <img src={HandshakeIcon} alt="Protection" />
            </div>
            <div>
              <div className="benefit-item-title">
                Transparent Ethical Engagement
              </div>
              <p className="benefit-item-description">
                Benefit from our transparent, ethical phishing approach that
                delivers confidential, actionable intelligence for your security
                strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
