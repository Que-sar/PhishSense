import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <article className="services-plan-section">
      <div className="services-title-section">
        <div className="services-title"> Our Primary Services</div>
        <div className="services-title-description">
          We tailor it to your needs.
        </div>
      </div>
      <div className="services-panel-section-first">
        <div className="services-panel white">
          <div className="services-panel-title webappt-title">
            Web Application Security Testing
          </div>
          <div className="services-panel-bulletpoints">
            Adaptive and efficient web application security testing with
            actionable reporting to protect your business and visualise costs,
            revenue impact.
          </div>
          <div className="horizontalLine"></div>
          <Link to="/solutions#webapptest" className="services-action-button">
            Learn More
          </Link>
        </div>

        <div className="services-panel orange ">
          <div className="services-panel-title training-title">
            Cyber Awareness Workshop
          </div>
          <div className="services-panel-bulletpoints">
            Engaging learning, and team building exercises for a measurable,
            long lasting cybersecurity awareness, that you won't find anywhere
            else.
          </div>
          <div className="horizontalLine-whites"></div>
          <Link to="/solutions#workshop" className="services-action-button">
            Learn More
          </Link>
        </div>

        <div className="services-panel white generalphishing">
          <div className="services-panel-title phishing-title">
            Comprehensive Phishing Assessment
          </div>
          <div className="services-panel-bulletpoints">
            Comprehensive security awareness simulations to test resilience,
            followed by security insights with risks, associated expenses.
          </div>
          <div className="horizontalLine"></div>
          <Link to="/solutions#phishing" className="services-action-button">
            Learn More
          </Link>
        </div>
      </div>{" "}
    </article>
  );
};

export default Services;
