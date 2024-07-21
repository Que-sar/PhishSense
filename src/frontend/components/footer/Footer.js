import React from "react";
import "./Footer.css";
import LinkedinIcon from "../news/colorlinkedin.svg";
import PrivacyPolicy from "../privacy/Policy";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const routes = props.routes;
  const privacyPolicyObj = routes[6];
  const footerLinks = routes.slice(1, -2).map((route, index) => (
    <Link
      to={route.path}
      key={route.reference + index + "-footer"}
      className="footer-link"
    >
      {route.name}
    </Link>
  ));
  const links = <div className="footer-links-container">{footerLinks}</div>;

  return (
    <footer className="footer-section">
      <span className="footer-separator"></span>
      <div className="footer-forms">
        <div className="footer-socials">
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/company/speculor"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-footer-image"
            >
              <img src={LinkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-quick-links">{links}</div>
        <div className="privacy-policy">
          <Link
            to={privacyPolicyObj.path}
            key={privacyPolicyObj.reference + "-1-footer"}
            className="privacy-policy-link"
          >
            {privacyPolicyObj.name}
          </Link>
        </div>
        <p className="footer-brandname">Speculor 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
