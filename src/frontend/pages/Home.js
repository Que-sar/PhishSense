import React from "react";

import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import Services from "../components/solutions/Services";
import ContactPanel from "../components/contact/ContactPanel";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "Speculor - Opening eyes.",
    description:
      "We solve cyber threats, accompanied by a report with insights for every department, truly opening eyes.",
    url: "https://www.speculor.uk",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.speculor.uk/static/media/speculorlogo.2dea119f4ffa4b3bc88d.webp",
      width: 1200,
      height: 800,
    },
  };
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Speculor</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ready to Enhance Your Cybersecurity?"
        />
        <meta
          name="og:description"
          content="We solve cyber threats, accompanied by a report with insights for every department, truly opening eyes."
        />
        <meta
          property="og:image"
          content="https://www.speculor.uk/static/media/speculorlogo.2dea119f4ffa4b3bc88d.webp"
        />
        <meta property="og:url" content="https://www.speculor.uk" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />

      <Benefits />

      <Services />

      <ContactPanel titlerequired={true} />
    </div>
  );
};

export default Home;
