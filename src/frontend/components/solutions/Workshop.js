import React from "react";
import "./Workshop.css";
import SpearPhishImage from "../images/solutionimagery/workshop.webp";

const Workshop = () => {
  return (
    <section className="workshop-phishing-container">
      <div className="workshop-phishing-title">Cyber Awareness Workshop</div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={SpearPhishImage}
            className="solution-image-workshop"
            alt="Cyber Awareness Workshop"
          />
        </div>
        <div className="solution-text workshop-text-description">
          Our Cyber Awareness Workshop is a dynamic training session focusing on
          cybersecurity awareness. <br /> <br />
          It starts with an introduction to social engineering, followed by a
          presentation on the latest scams, tailored for a general audience.{" "}
          <br /> <br />
          This is followed by interactive exercises and educational games,
          providing a hands-on experience in identifying and reacting to
          threats. <br /> <br />
          The workshop content is customizable based on previous phishing test
          outcomes or specific needs. <br /> <br />
          The session concludes with focused discussions and takeaway materials
          to reinforce key learning points and enhance overall cybersecurity
          awareness.
        </div>
      </div>
    </section>
  );
};

export default Workshop;
