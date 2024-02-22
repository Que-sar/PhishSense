import React from "react";
import "./Webapptest.css";
import Webappimage from "../images/solutionimagery/webapptest.webp";

const Webapptest = () => {
  return (
    <section className="webapptest-container">
      <div className="webapptest-title">Web Application Security Testing</div>
      <div className="solutions-container-descriptions">
        <div className="solution-image-container">
          <img
            src={Webappimage}
            className="solution-image-webapp"
            alt="Webapplication testing"
          />
        </div>
        <div className="solution-text webapptest-text-description">
          Our service is tailored to identify vulnerabilities within your web
          applications, from front-end user interfaces to back-end APIs. <br />{" "}
          <br />
          Through a custom approach, we address the specific security needs of
          your organization.
          <br /> <br />
          This affordable testing solution means to enable businesses of all
          sizes to take a proactive approach in securing their web application.{" "}
          <br /> <br />
          Our service also comes with detailed reporting, detailing findings and
          mitigation strategies to secure the web application further.
        </div>
      </div>
    </section>
  );
};

export default Webapptest;
