import React from "react";
import "./Phishing.css";
import PhishiMage from "../images/solutionimagery/phishing.webp";

const Phishing = () => {
  return (
    <section className="phishing-phishing-container">
      <div className="phishing-phishing-title">General Phishing Assessment</div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={PhishiMage}
            className="solution-image-phishing"
            alt="General Phishing"
          />
        </div>
        <div className="solution-text phishing-text-description">
          Equip your organization with the fundamental line of defense against
          phishing.
          <br /> <br /> Our General Phishing Assessment tests your team's
          reflexes against broad-scale phishing attacks, employing simulated
          phishing emails that lead to a safe but realistic landing page. <br />{" "}
          <br /> We analyze the response and provide a detailed report to
          highlight your security posture and areas for improvement. <br />
          <br />
          Following the assessment, we offer optional educational modules,
          tailored to your needs or test results, to reinforce your team's
          phishing defense skills.
        </div>
      </div>
    </section>
  );
};

export default Phishing;
