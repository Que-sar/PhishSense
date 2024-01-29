import React from "react";
import "./Smishing.css";
import Smishimage from "../images/solutionimagery/smishing.webp";

const Smishing = () => {
  return (
    <section className="smishing-phishing-container">
      <div className="smishing-phishing-title">
        Smishing (SMS Phishing) Assessment
      </div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={Smishimage}
            className="solution-image-smishing"
            alt="Smishing"
          />
        </div>
        <div className="solution-text smishing-text-description">
          Our SMS Phishing Assessment gauges mobile threat awareness by sending
          tailored text messages with deceptive links. <br /> <br />
          Each simulation is crafted to mimic authentic SMS communication,
          leading to specialized landing pages for an immersive experience.{" "}
          <br /> <br />
          Comprehensive reporting follows, providing valuable metrics on
          response and readiness.
          <br /> <br />
          Concluding the test, we deliver focused educational content to bolster
          mobile security acumen as needed.
        </div>
      </div>
    </section>
  );
};

export default Smishing;
