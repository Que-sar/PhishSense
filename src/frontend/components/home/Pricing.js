import React, { useState } from "react";
import { individual, enterprise } from "./Descriptions";
import "./Pricing.css";

const Pricing = () => {
  const [individualButton, setIndividualButton] = useState(true);
  const [enterpriseButton, setEnterpriseButton] = useState(false);
  const [enterprisePeople, setEnterprisePeople] = useState(1);

  const handleNumberChange = (event) => {
    const newNumber = event.target.value;
    if (newNumber > 0) {
      setEnterprisePeople(event.target.value);
    }
  };

  const individualPrice = {
    training: 10,
    certification: 20,
    comprehensive: 25,
  };

  const individualButtonListener = () => {
    if (!individualButton) {
      setIndividualButton(true);
      setEnterpriseButton(false);
      setEnterprisePeople(1);
    }
  };

  const enterpriseButtonListener = () => {
    if (!enterpriseButton) {
      setEnterpriseButton(true);
      setIndividualButton(false);
      setEnterprisePeople(10);
    }
  };

  return (
    <div className="pricing-plan-section">
      <div className="pricing-title-section">
        <div className="pricing-title">Pricing Plan</div>
        <div className="pricing-title-description">
          Tailor it to your needs.
        </div>
        <div className="pricing-title-plan">
          <button
            className={`plan-button individual-plan ${
              individualButton ? "active" : ""
            }`}
            onClick={individualButtonListener}
          >
            Individual Plan
          </button>
          <button
            className={`plan-button enterprise-plan ${
              enterpriseButton ? "active" : ""
            }`}
            onClick={enterpriseButtonListener}
          >
            Enterprise Plan
          </button>
        </div>
      </div>
      {enterpriseButton ? (
        <div className="enterpriseEntry entry-panel">
          <div>How many people will use this service? </div>
          <input
            min={1}
            max={10000}
            type="number"
            id="numberInput"
            value={enterprisePeople}
            onChange={handleNumberChange}
          />
        </div>
      ) : (
        " "
      )}

      <div className="pricing-panel-section">
        <div className="pricing-panel training">
          <div className="pricing-panel-title training-title">Training</div>
          <div className="pricing-panel-price training-price">
            {enterprisePeople * individualPrice.training}$
          </div>
          <button className="price-action-button">Get started</button>
          <div className="horizontalLine"></div>
          <div className="pricing-panel-description training-description">
            {individualButton ? individual.training : enterprise.training}
          </div>
          <div className="horizontalLine"></div>
          <div className="pricing-panel-bulletpoints">
            <ul>
              <li>Interactive material</li>
              <li>Habit-building exercises</li>
              <li>Decision-making simulations</li>
              <li>Comprehensive guide</li>
              <li>Monitored progress</li>
            </ul>
          </div>
        </div>

        <div className="pricing-panel certification">
          <div className="pricing-panel-title certification-title">
            Certification
          </div>
          <div className="pricing-panel-price certification-price">
            {enterprisePeople * individualPrice.certification}$
          </div>
          <button className="price-action-button">Get started</button>
          <div className="horizontalLine-whites"></div>
          <div className="pricing-panel-description certification-description">
            {individualButton
              ? individual.certification
              : enterprise.certification}
          </div>
          <div className="horizontalLine-whites"></div>
          <div className="pricing-panel-bulletpoints">
            <ul>
              <li>Comprehensive assessment</li>
              <li>Professional advancement</li>
              <li>Trust-building certification</li>
              <li>Ongoing validity</li>
            </ul>
          </div>
        </div>

        <div className="pricing-panel comprehensive">
          <div className="pricing-panel-title comprehensive-title">
            Comprehensive
          </div>
          <div className="pricing-panel-price comprehensive-price">
            {enterprisePeople * individualPrice.comprehensive}$
          </div>
          <button className="price-action-button">Get started</button>
          <div className="horizontalLine"></div>
          <div className="pricing-panel-description comprehensive-description">
            {individualButton
              ? individual.comprehensive
              : enterprise.comprehensive}
          </div>
          <div className="horizontalLine"></div>
          <div className="pricing-panel-bulletpoints">
            <ul>
              <li>Training Plan</li>
              <li>Certification Plan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
