import React from "react";
import "./Answer.css";
import Footer from "../footer/Footer";

const Answer = () => {
  const correctness = true; // true == Correct, false == Incorrect
  const legitimate = false; // true ==  Legitimate, false == Malicious
  return (
    <>
      <div className="answer-background">
        <div
          className="answer-panel"
          style={{ justifyContent: legitimate ? "center" : "" }}
        >
          <div className="answer-title">
            Your answer was &nbsp;
            <div
              className="correctness-title"
              style={{ color: correctness ? "greenyellow" : "red" }}
            >
              {correctness ? "Correct" : "Incorrect"}
            </div>
          </div>
          <div className="legitimacy-answer">
            The mail was &nbsp;
            <div style={{ color: legitimate ? "greenyellow" : "red" }}>
              {legitimate ? "Legitimate" : "Malicious"}
            </div>
          </div>
          {!legitimate && <ul className="listedSigns">Checked this that</ul>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Answer;
