import React from "react";
import BenefitsWave from "../images/heroWave.svg";
import "./Wave.css";

const Wave = () => {
  return (
    <div className="benefits-wave">
      <img src={BenefitsWave} alt="Benefits Wave" />
    </div>
  );
};

export default Wave;
