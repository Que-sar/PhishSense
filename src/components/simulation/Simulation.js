import React, { useState } from "react";
import "./Simulation.css";
import { HelpCommands } from "./HelpCommands";
import JoyRide from "react-joyride";

import TodoPanel from "./TodoPanel";
import SimulationPanel from "./SimulationPanel";

const Simulation = (props) => {
  const mailContents = props.mailContents;
  const HelperContent = props.HelperContent;

  const [helpIndicator, setHelpIndicator] = useState(false);

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
        steps={HelpCommands}
        continuous
        showProgress
        disableScrolling
        styles={{
          tooltip: {
            maxWidth: "200px", // Adjust the width as needed
          },
        }}
      />
    </div>
  );
};

export default Simulation;
