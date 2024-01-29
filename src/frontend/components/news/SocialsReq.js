import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SocialsReq = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>News - {props.title}</title>
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={props.image} />
        <meta property="og:description" content={props.shortDescription} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
      </Helmet>
    </HelmetProvider>
  );
};

export default SocialsReq;
