import React from "react";
import "../components/notfound/NotFound.css";
import NotFoundImage from "../components/notfound/404image.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <article className="notfound-container">
        <div className="notfound-image-container">
          <img className="notfound-image" src={NotFoundImage} alt="Not found" />
        </div>
        <div className="notfound-data-container">
          <h1 className="notfound-title">Oops!</h1>
          <div className="notfound-subtitle">404 - Page not found</div>
          <div className="notfound-description">
            The page you are looking for might have been removed,
            <br /> had its name changed or is temporarily unavailable
          </div>
          <Link className="backtohome" to="/">
            Back to Home
          </Link>
        </div>
      </article>
    </>
  );
};

export default NotFound;
