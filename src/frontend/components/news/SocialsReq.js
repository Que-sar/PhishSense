import React from "react";
import facebookSvg from "./roundfacebook.svg";
import linkedinSvg from "./roundlinkedin.svg";
import redditSvg from "./roundreddit.svg";
import emailSvg from "./roundemail.svg";
import { Helmet } from "react-helmet-async";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
} from "react-share";

const SocialsReq = (props) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: props.title,
    description: props.shortDescription,
    image: props.image,
    author: props.author,
    datePublished: props.date,
  };

  return (
    <>
      <Helmet>
        <title>Home - {props.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.shortDescription} />
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <LinkedinShareButton
        url={encodeURIComponent(
          "https://news.speculor.uk" + window.location.pathname
        )}
        title={props.title}
        description={props.shortDescription}
        className="article-linkedin-share"
      >
        <img src={linkedinSvg} alt="Linkedin" />
      </LinkedinShareButton>

      <FacebookShareButton
        url={encodeURIComponent(
          "https://news.speculor.uk" + window.location.pathname
        )}
        title={props.title}
        description={props.shortDescription}
        className="article-facebook-share"
      >
        <img src={facebookSvg} alt="Facebook" />
      </FacebookShareButton>

      <EmailShareButton
        title={props.title}
        url={encodeURIComponent(
          "https://news.speculor.uk" + window.location.pathname
        )}
        className="article-email-share"
      >
        <img src={emailSvg} alt="Email" />
      </EmailShareButton>

      <RedditShareButton
        url={encodeURIComponent(
          "https://news.speculor.uk" + window.location.pathname
        )}
        title={props.title}
        className="article-reddit-share"
      >
        <img src={redditSvg} alt="Reddit" />
      </RedditShareButton>
    </>
  );
};

export default SocialsReq;
