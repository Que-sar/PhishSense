import React, { useRef, useEffect } from "react";
import "./FinishModel.css";

const FinishModel = (props) => {
  const setFinishModal = props.setFinishedModal;
  const setFinishAnalysis = props.setFinishedAnalysis;
  const finishContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        finishContainerRef.current &&
        !finishContainerRef.current.contains(event.target)
      ) {
        setFinishModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setFinishModal]);

  return (
    <div className="finishModalBackground">
      <div className="finishModalContainer" ref={finishContainerRef}>
        <div className="finishCloseBtn">
          <button
            className="x-button-finish-modal"
            onClick={() => {
              setFinishModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="finishModalContent">
          Are you certain you have finished evaluating the mail?
        </div>
        <div className="finish-modal-footer">
          <button
            onClick={() => {
              setFinishAnalysis(true);
              setFinishModal(false);
            }}
            className="finish-doneBtn"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishModel;
