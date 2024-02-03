import React from "react";
import "./Workshop.css";
import SpearPhishImage from "../images/solutionimagery/workshop.webp";

const Workshop = () => {
  return (
    <section className="workshop-phishing-container">
      <div className="workshop-phishing-title">Email Security Workshop</div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={SpearPhishImage}
            className="solution-image-workshop"
            alt="Email Security Workshop"
          />
        </div>
        <div className="solution-text workshop-text-description">
          Our Email Security Workshop is a dynamic training session focusing on
          phishing awareness. <br /> <br />
          It starts with an introduction to phishing, followed by a presentation
          on the latest email scams, tailored for a general audience. <br />{" "}
          <br />
          This is followed by interactive exercises and educational games,
          providing a hands-on experience in identifying and reacting to
          phishing threats. <br /> <br />
          The workshop content is customizable based on previous phishing test
          outcomes or specific needs. <br /> <br />
          The session concludes with focused discussions and takeaway materials
          to reinforce key learning points and enhance overall email security
          awareness.
        </div>
      </div>
    </section>
  );
};

export default Workshop;
