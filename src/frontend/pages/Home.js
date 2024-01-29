import React from "react";

import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import Services from "../components/solutions/Services";
import ContactPanel from "../components/contact/ContactPanel";
import { Helmet } from "react-helmet-async";

const Home = () => {
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
          name="description"
          content="Strengthen your team's cyber defenses with our phishing awareness simulations and training. Join us to build a proactive culture of cybersecurity awareness."
        />
        <meta
          property="og:image"
          content="https://www.speculor.uk/static/media/speculorlogo.2dea119f4ffa4b3bc88d.webp"
        />
        <meta property="og:url" content="https://www.speculor.uk" />
      </Helmet>
      <Hero />

      <Benefits />

      <Services />

      <ContactPanel titlerequired={true} />
    </div>
  );
};

export default Home;
