import React, { useState } from "react";
import "./Simulation.css";
import { HelpCommands } from "./HelpCommands";
import JoyRide from "react-joyride";

import TodoPanel from "./TodoPanel";
import SimulationPanel from "./SimulationPanel";

const Simulation = (props) => {
  const mailContents = props.mailContents;
  const HelperContent = props.HelperContent;

  const [showTodoPanel, setShowTodoPanel] = useState(false);
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
        setShowTodoPanel={setShowTodoPanel}
      />
      <div className={showTodoPanel ? "todo-panel" : "todo-panel hidden"}>
        {showTodoPanel && <TodoPanel />}
      </div>

      <JoyRide
        callback={handleJoyrideCallback}
        run={helpIndicator}
        steps={
          showTodoPanel
            ? HelpCommands
            : HelpCommands.slice(0, 4).map((step, index) => {
                // Customize floaterProps and disableScrolling for each step
                const floaterProps = {
                  hideArrow: step.disableFloaterArrow, // Set the hideArrow property based on your step configuration
                  // Add any other floaterProps you want to customize for this step
                };

                const customizedStep = {
                  ...step, // Include the original step properties
                  floaterProps, // Include the customized floaterProps
                  disableScrolling: step.disableScrolling, // Set disableScrolling based on your step configuration
                };

                return customizedStep;
              })
        }
        continuous
        showProgress
      />
    </div>
  );
};

export default Simulation;
