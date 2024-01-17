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
        <div className="services-title-sub-description">
          Customize your multi-phase assessment plan
        </div>
      </div>

      <div className="services-panel-section">
        <div className="services-panel phishing">
          <div className="services-panel-title phishing-title">
            General Phishing Assessment
          </div>
          <button className="services-action-button">Add to Inquiry</button>
          <div className="horizontalLine"></div>
          <div className="services-panel-bulletpoints">
            <ul>
              <li>Interactive material</li>
              <li>Habit-building exercises</li>
              <li>Decision-making simulations</li>
              <li>Comprehensive guide</li>
              <li>Monitored progress</li>
            </ul>
          </div>
        </div>

        <div className="services-panel spearphishing">
          <div className="services-panel-title spearphishing-title">
            Spear Phishing Assessment
          </div>

          <button className="services-action-button">Add to Inquiry</button>
          <div className="horizontalLine-whites"></div>
          <div className="services-panel-bulletpoints">
            <ul>
              <li>Comprehensive assessment</li>
              <li>Professional advancement</li>
              <li>Trust-building spearphishing</li>
              <li>Ongoing validity</li>
            </ul>
          </div>
        </div>

        <div className="services-panel comprehensive">
          <div className="services-panel-title comprehensive-title">
            Whaling Assessment
          </div>
          <button className="services-action-button">Add to Inquiry</button>
          <div className="horizontalLine"></div>
          <div className="services-panel-bulletpoints">
            <ul>
              <li>phishing Plan</li>
              <li>spearphishing Plan</li>
            </ul>
          </div>
        </div>

        <div className="services-panel spearphishing">
          <div className="services-panel-title spearphishing-title">
            QR Code Phishing Assessment
          </div>

          <button className="services-action-button">Add to Inquiry</button>
          <div className="horizontalLine-whites"></div>
          <div className="services-panel-bulletpoints">
            <ul>
              <li>Comprehensive assessment</li>
              <li>Professional advancement</li>
              <li>Trust-building spearphishing</li>
              <li>Ongoing validity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
