import React, { useState, useEffect } from "react";
import "./Simulation.css";
import { HelpCommands } from "./HelpCommands";
import JoyRide from "react-joyride";

import TodoPanel from "./TodoPanel";
import SimulationPanel from "./SimulationPanel";

const Simulation = (props) => {
  const mailContents = props.mailContents;
  const HelperContent = props.HelperContent;

  const [helpIndicator, setHelpIndicator] = useState(false);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const helpCommandsWithPlacement = HelpCommands.map((step) => ({
    ...step,
    placement: screenSize <= 1506 ? step.placementSmallScreen : step.placement,
  }));

  const handleJoyrideCallback = (data) => {
    // Check if the joyride is finished or closed
    if (data.status === "finished" || data.action === "close") {
      setHelpIndicator(false);
    }
  };

  return (
    <div className="simulation-container">
      <SimulationPanel
        mailContents={mailContents}
        HelperContent={HelperContent}
        HelpIndicator={setHelpIndicator}
      />
      <TodoPanel />
      <JoyRide
        callback={handleJoyrideCallback}
        run={helpIndicator}
        steps={helpCommandsWithPlacement}
        continuous
        showProgress
        disableScrolling={false}
      />
    </div>
  );
};

export default Simulation;
