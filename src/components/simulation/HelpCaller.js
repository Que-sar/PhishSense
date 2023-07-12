import React, { useState } from "react";
import helpIcon from "../images/simulationIconsSmaller/helpIcon.svg";
import HelpPanel from "./HelpPanel";
import "./HelpCaller.css";

const HelpCaller = () => {
  const [helperDisplay, setHelperDisplay] = useState(false);
  return (
    <>
      <div className="help-button">
        <div
          className="help-click"
          onClick={() => {
            setHelperDisplay(true);
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
      {helperDisplay && <HelpPanel setHelpPanel={setHelperDisplay} />}
    </>
  );
};

export default HelpCaller;
