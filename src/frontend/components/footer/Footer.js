import React from "react";
import "./Footer.css";
import FaceIcon from "./facebook.svg";
import LinkedinIcon from "./linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-forms">
        <div className="footer-policies left-column">
          <div className="footer-title">
            2024 Speculor, All rights reserved.
          </div>
        </div>
        <div className="footer-policies right-column">
          <div className="footer-links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <img src={FaceIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
