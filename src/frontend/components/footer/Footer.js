import React from "react";
import "./Footer.css";

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
            <div className="linkedin">FaceLink</div>
            <div className="facebook">Face</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
