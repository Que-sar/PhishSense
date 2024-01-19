import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-plan-section">
      <div className="services-title-section">
        <div className="services-title"> Our Primary Services</div>
        <div className="services-title-description">
          Tailor it to your needs.
        </div>
      </div>

      <div className="services-panel-section">
        <div className="services-panel white generalphishing">
          <div className="services-panel-title phishing-title">
            General Phishing Assessment
          </div>
          <div className="services-panel-bulletpoints">
            Comprehensive phishing simulations to test your organization's
            resilience.
          </div>
          <div className="horizontalLine"></div>
          <button className="services-action-button">Learn More</button>
        </div>

        <div className="services-panel orange">
          <div className="services-panel-title spearphishing-title">
            Spear Phishing Assessment
          </div>
          <div className="services-panel-bulletpoints">
            Targeted simulations with personalized emails to assess individual
            security awareness.
          </div>
          <div className="horizontalLine-whites"></div>
          <button className="services-action-button">Learn More</button>
        </div>

        <div className="services-panel white generalwhaling">
          <div className="services-panel-title whaling-title">
            Whaling Assessment
          </div>
          <div className="services-panel-bulletpoints">
            Advanced phishing tests, including investigations and personalized
            emailing, messaging.
          </div>
          <div className="horizontalLine"></div>
          <button className="services-action-button">Learn More</button>
        </div>

        <div className="services-panel orange ">
          <div className="services-panel-title quishing-title">
            Quishing Assessment
          </div>
          <div className="services-panel-bulletpoints">
            Utilizes QR codes for phishing simulations instead of traditional
            links.
          </div>
          <div className="horizontalLine-whites"></div>
          <button className="services-action-button">Learn More</button>
        </div>

        <div className="services-panel white">
          <div className="services-panel-title smishing-title">
            SMS Phishing Assessment
          </div>
          <div className="services-panel-bulletpoints">
            Assess mobile security with SMS-based phishing simulations.
          </div>
          <div className="horizontalLine"></div>
          <button className="services-action-button">Learn More</button>
        </div>
      </div>
      <div className="services-title-sub-description">
        Contact us to customize your multi-phase assessment plan
      </div>
    </div>
  );
};

export default Services;
