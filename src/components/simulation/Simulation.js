import React from "react";
import "./Simulation.css";

import TodoPanel from "./TodoPanel";
import SimulationPanel from "./SimulationPanel";

const Simulation = (props) => {
  const mailContents = props.mailContents;
  return (
    <div className="simulation-container">
      <SimulationPanel mailContents={mailContents} />

      <TodoPanel />
    </div>
  );
};

export default Simulation;
