import React, { useRef, useEffect } from "react";
import "./HelpPanel.css";

const HelpPanel = (props) => {
  const setHelperPanel = props.setHelpPanel;
  const helpContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        helpContainerRef.current &&
        !helpContainerRef.current.contains(event.target)
      ) {
        setHelperPanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setHelperPanel]);

  return (
    <div className="helpModalBackground">
      <div className="helpModalContainer" ref={helpContainerRef}>
        <div className="helpCloseBtn">
          <button
            className="x-button-help-modal"
            onClick={() => {
              setHelperPanel(false);
            }}
          >
            X
          </button>
        </div>
        <div className="helpModalContent">Im the content</div>
        <div className="help-modal-footer">
          <button
            onClick={() => {
              setHelperPanel(false);
            }}
            className="help-doneBtn"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPanel;
