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
      <section className="benefits-section">
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
              <div className="benefit-item-title">
                Reporting for Cyber Insurance
              </div>
              <p className="benefit-item-description">
                Get reports formatted for cyber insurance, helping quantify
                risks and improve coverage.
              </p>
            </div>
          </div>

          <div className="secondBenefit">
            <div className="benefit-item-icon">
              <img src={ScaleIcon} alt="Protection" />
            </div>
            <div>
              <div className="benefit-item-title">Enhance Vigilence</div>
              <p className="benefit-item-description">
                Effectively strengthen your defenses through custom strategic
                insights from certified ethical hackers.
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
                Benefit from our transparent, ethical, and non-disruptive
                approach, delivering actionable intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
