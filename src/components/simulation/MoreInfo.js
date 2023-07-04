import React from "react";
import "./MoreInfo.css";

const MoreInfo = (props) => {
  const headerInfo = props.headerInfo;
  const setOpenModal = props.setOpenModal;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContent">{headerInfo}</div>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
