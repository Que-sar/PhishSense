import React from "react";
import "./Simulation.css";

import TodoPanel from "./TodoPanel";
import SimulationPanel from "./SimulationPanel";

const Simulation = (props) => {
  const displayText = props.EmailDisplay;
  return (
    <div className="simulation-container">
      <SimulationPanel EmailDisplay={displayText} />

      <TodoPanel />
    </div>
  );
};

export default Simulation;
