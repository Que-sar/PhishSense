import React from "react";

import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import Pricing from "../components/home/Pricing";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />

      <Benefits />

      <Pricing />

      <Footer />
    </div>
  );
};

export default Home;
