import React from 'react';
import "./Simulation.css";

import TodoPanel from './TodoPanel';
import SimulationPanel from './SimulationPanel';


const Simulation = () => {

  return (
    <div className='simulation-container'>

        <SimulationPanel />

        <TodoPanel />

    </div>
  )
}

export default Simulation