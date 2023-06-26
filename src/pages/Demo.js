import React from "react";
import Simulation from "../components/simulation/Simulation";
import Footer from "../components/footer/Footer";
import BenefitsWave from "../components/images/heroWave.svg";
import Example from "../components/simulation/Example";

const Demo = () => {
  return (
    <>
      <Simulation EmailDisplay={<Example />} />
      <div className="wave">
        <img
          src={BenefitsWave}
          alt="Benefits Wave"
          style={{ marginTop: "-2px" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Demo;
