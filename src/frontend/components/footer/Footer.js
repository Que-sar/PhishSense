import React from "react";
import "./Footer.css";
import FaceIcon from "../news/colorfacebook.svg";
import LinkedinIcon from "../news/colorlinkedin.svg";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const routes = props.routes;
  const footerLinks = routes.slice(1, -1).map((route, index) => (
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
            <a
              href="https://www.facebook.com/speculorcyber"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-footer"
            >
              <img
                className="facebook-footer-image"
                src={FaceIcon}
                alt="Facebook"
              />
            </a>
          </div>
        </div>
        <div className="footer-quick-links">{links}</div>
        <p className="footer-brandname">Speculor 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
