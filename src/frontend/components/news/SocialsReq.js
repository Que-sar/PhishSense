import React from "react";
import facebookSvg from "./roundfacebook.svg";
import linkedinSvg from "./roundlinkedin.svg";
import redditSvg from "./roundreddit.svg";
import emailSvg from "./roundemail.svg";
import { Helmet } from "react-helmet-async";
import { RedditShareButton, EmailShareButton } from "react-share";

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
      <a
        href={
          "https://www.linkedin.com/sharing/share-offsite/?url=https://news.speculor.uk" +
          window.location.pathname
        }
        target="_blank"
        className="article-linkedin-share"
      >
        <img src={linkedinSvg} alt="Linkedin" />
      </a>

      <a
        href={
          "https://www.facebook.com/sharer/sharer.php?u=https://news.speculor.uk" +
          window.location.pathname
        }
        target="_blank"
        className="article-facebook-share"
      >
        <img src={facebookSvg} alt="Facebook" />
      </a>

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
