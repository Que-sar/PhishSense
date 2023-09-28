import React from "react";
import "./HelpCaller.css";
import helpIcon from "../images/simulationIconsSmaller/helpIcon.svg";

const HelpCaller = (props) => {
  const setHelpNeeded = props.helpNeeded;

  return (
    <div className="help-button">
      <div
        className="help-click"
        onClick={() => {
          setHelpNeeded(true);
        }}
      >
        <img
          src={helpIcon}
          className="help-image-logo"
          alt="Show me the functions"
        />
        <div className="help-text-title">What am I meant to do?</div>
      </div>
    </div>
  );
};

export default HelpCaller;
