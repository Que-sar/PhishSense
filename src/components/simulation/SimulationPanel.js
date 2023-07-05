import React, { useState } from "react";
import "./SimulationPanel.css";
import MoreInfo from "./MoreInfo";

import GiveUp from "../images/simulationIconsSmaller/giveup.svg";
import Report from "../images/simulationIconsSmaller/report.svg";
import MarkReport from "../images/simulationIconsSmaller/markReport.svg";
import Delete from "../images/simulationIconsSmaller/delete.svg";
import Reply from "../images/simulationIconsSmaller/reply.svg";
import Forward from "../images/simulationIconsSmaller/forward.svg";
import LightFlag from "../images/simulationIconsSmaller/lightflag.svg";
import DarkFlag from "../images/simulationIconsSmaller/darkflag.svg";
import More from "../images/simulationIconsSmaller/more.svg";
import ProfilePic from "../images/simulationIconsSmaller/profilePic.svg";
import attachmentLogo from "../images/simulationIconsSmaller/attachmentLogo.svg";
import helpIcon from "../images/simulationIconsSmaller/helpIcon.svg";

const SimulationPanel = (props) => {
  const [flagged, setFlagged] = useState(false);
  const [marked, setMarked] = useState(false);
  const [legitMarked, setLegitMarked] = useState(false);
  const [maliciousMarked, setMaliciousMarked] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [legitimateColor, setLegitimateColor] = useState("#f5f5f5");
  const [maliciousColor, setMaliciousColor] = useState("#f5f5f5");

  const mailContent = props.mailContents;

  const markClick = () => {
    setMarked(!marked);
  };

  const flagClick = () => {
    setFlagged(!flagged);
  };

  const legitimateClick = () => {
    setMaliciousMarked(false);
    setLegitMarked(true);
    setMaliciousColor("#f5f5f5");
    setLegitimateColor("#1ED44B");
  };

  const maliciousClick = () => {
    setLegitMarked(false);
    setMaliciousMarked(true);
    setLegitimateColor("#f5f5f5");
    setMaliciousColor("#DE2626");
  };
  return (
    <div className="simulation-panel">
      <div className="email-topbar">
        <div className="topbar-container">
          <div className="icon done-button">
            <button className="giveup-click">
              <img src={GiveUp} alt="GiveUp" />
              <span className="tooltiptext-giveup">Mark as finished</span>
            </button>
          </div>
          <div className="small-line"></div>
          <div className="icon done-button">
            <button className="legitimate-click" onClick={legitimateClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ fill: legitimateColor }}
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <span className="tooltiptext-legitimate">
                {legitMarked ? "Marked as legitimate" : "Mark as legitimate"}
              </span>
            </button>
          </div>
          <div className="icon markbad-phishing-button">
            <button className="malicious-click" onClick={maliciousClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ fill: maliciousColor }}
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
              <span className="tooltiptext-malicious">
                {maliciousMarked ? "Marked as malicious" : "Mark as malicious"}
              </span>
            </button>
          </div>
          <div className="small-line"></div>
          <div className="icon report-phishing-button">
            <button onClick={markClick} className="report-click">
              <img src={marked ? Report : MarkReport} alt="Report" />
              <span className="tooltiptext-report">
                {marked ? "Marked as spam" : "Mark as spam"}
              </span>
            </button>
          </div>
          <div className="icon delete-button">
            <button className="delete-click">
              <img src={Delete} alt="Delete" />
              <span className="tooltiptext-delete">Delete</span>
            </button>
          </div>

          <div className="small-line"></div>
          <div className="icon reply-button">
            <button className="reply-click">
              <img src={Reply} alt="Reply" />
              <span className="tooltiptext-reply">Reply</span>
            </button>
          </div>
          <div className="icon forward-button">
            <button className="forward-click">
              <img src={Forward} alt="Forward" />
              <span className="tooltiptext-forward">Forward</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-head">
          <div className="mail-identity">
            <div className="mail-subject">{mailContent.titleName}</div>
            <div className="sender-identity">
              <div className="sender-photo">
                <img
                  src={ProfilePic}
                  alt="ProfilePicture"
                  className="profile-icon"
                />
              </div>
              <div className="sender-name">{mailContent.senderName}</div>
            </div>
            <div className="reciever-identity">To: Katrina Milka</div>
            {mailContent.attachmentPresence ? (
              <div className="mail-attachments">
                <div className="attachment-title">Attachments:</div>
                <div className="attachment-content">
                  <img src={attachmentLogo} alt="Attachment List" />
                  <div className="attachment-filename">Tablelist.pdf</div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="literal-email">
              <div className="read-container">{mailContent.emailContent}</div>
            </div>
          </div>
          <div className="mail-options">
            <div className="icon flag-button">
              <button onClick={flagClick} className="flag-click">
                <img src={flagged ? DarkFlag : LightFlag} alt="Flag" />
                <span className="tooltiptext-flag">
                  {flagged ? "Flagged" : "Flag it"}
                </span>
              </button>
            </div>
            <div className="icon more-actions-button">
              <button
                className="more-click"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <img src={More} alt="Show more" />
                <span className="tooltiptext-more">More information</span>
              </button>
              {modalOpen && (
                <MoreInfo
                  setOpenModal={setModalOpen}
                  headerInfo={mailContent.emailContent}
                />
              )}
            </div>
          </div>
        </div>
        <div className="mail-foot">
          <div className="reply-button">
            <button className="reply-click bottom">
              <img src={Reply} alt="Reply" className="reply-icon-down" />
              <span className="tooltiptext-reply">Reply</span>
            </button>
          </div>
          <div className="forward-button">
            <button className="forward-click bottom">
              <img src={Forward} alt="Forward" />
              <span className="tooltiptext-forward">Forward</span>
            </button>
          </div>
          <div className="help-button">
            <div className="help-click">
              <img src={helpIcon} alt="Show me the functions" />
              <span className="tooltiptext-help">Help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationPanel;
