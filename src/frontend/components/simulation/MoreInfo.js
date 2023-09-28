import React, { useEffect, useRef } from "react";
import "./MoreInfo.css";

const MoreInfo = (props) => {
  const headerInfo = props.headerInfo;
  const setOpenModal = props.setOpenModal;
  const modalContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(event.target)
      ) {
        setOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenModal]);

  return (
    <div className="modalBackground">
      <div className="modalContainer" ref={modalContainerRef}>
        <div className="titleCloseBtn">
          <button
            className="x-button-modal"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalContent">
          <div className="header-title">More information</div>
          <div className="header-info">{headerInfo}</div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="doneBtn"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
