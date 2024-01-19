import React from "react";

import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import Footer from "../components/footer/Footer";
import Services from "../components/solutions/Services";
import ContactPanel from "../components/contact/ContactPanel";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />

      <Benefits />

      <Services />

      <ContactPanel />

      <Footer />
    </div>
  );
};

export default Home;
