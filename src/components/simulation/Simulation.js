import React from "react";
import "./Simulation.css";

import TodoPanel from "./TodoPanel";
import SimulationPanel from "./SimulationPanel";

const Simulation = (props) => {
  const mailContents = props.mailContents;
  const HelperContent = props.HelperContent;
  return (
    <div className="simulation-container">
      <SimulationPanel
        mailContents={mailContents}
        HelperContent={HelperContent}
      />

      <TodoPanel />
    </div>
  );
};

export default Simulation;
