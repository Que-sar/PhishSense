import React from "react";
import facebookSvg from "./roundfacebook.svg";
import linkedinSvg from "./roundlinkedin.svg";
import redditSvg from "./roundreddit.svg";
import emailSvg from "./roundemail.svg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
} from "react-share";

const SocialsReq = (props) => {
  return (
    <>
      <LinkedinShareButton
        url={window.location.href}
        title={props.title}
        description={props.shortDescription}
        className="article-linkedin-share"
      >
        <img src={linkedinSvg} alt="Linkedin" />
      </LinkedinShareButton>

      <FacebookShareButton
        url={window.location.href}
        title={props.title}
        description={props.shortDescription}
        className="article-facebook-share"
      >
        <img src={facebookSvg} alt="Facebook" />
      </FacebookShareButton>

      <EmailShareButton
        title={props.title}
        url={window.location.href}
        className="article-email-share"
      >
        <img src={emailSvg} alt="Email" />
      </EmailShareButton>

      <RedditShareButton
        url={window.location.href}
        title={props.title}
        className="article-reddit-share"
      >
        <img src={redditSvg} alt="Reddit" />
      </RedditShareButton>
    </>
  );
};

export default SocialsReq;
