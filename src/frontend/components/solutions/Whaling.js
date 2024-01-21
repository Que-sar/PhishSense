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
          Our Whaling Assessment delves deep, targeting your organization's
          high-profile executives with crafted emails and SMS, mirroring
          advanced threat tactics. <br /> <br /> This top-tier simulation is
          backed by thorough investigations and diverse landing pages,
          concluding with an in-depth report to sharpen your leadership's
          cybersecurity acumen.
        </div>
      </div>
    </div>
  );
};

export default Whaling;
