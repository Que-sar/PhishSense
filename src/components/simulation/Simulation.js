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
        steps={showTodoPanel ? HelpCommands : HelpCommands.slice(0, 4)}
        continuous
        showProgress
        disableScrolling={false}
      />
    </div>
  );
};

export default Simulation;
