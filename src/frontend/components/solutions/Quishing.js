import React from "react";
import "./Quishing.css";
import QuishImage from "../images/solutionimagery/quishing.webp";

const Quishing = () => {
  return (
    <section className="quishing-phishing-container">
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
          Our Quishing Assessment introduces a novel layer to phishing tests,
          utilizing QR codes that lead to customized landing pages when scanned.
          <br /> <br />
          This subtle twist on traditional tactics assesses adaptability to
          modern threats. <br /> <br />
          Our service culminates with detailed reports, offering insights into
          your team's QR code security awareness.
          <br /> <br />
          Based on results, we provide specialized educational insights to
          enhance QR code threat recognition and response.
        </div>
      </div>
    </section>
  );
};

export default Quishing;
