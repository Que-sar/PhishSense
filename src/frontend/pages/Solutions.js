import React from "react";
import "../components/solutions/Solutions.css";
import Footer from "../components/footer/Footer";
import Intro from "../components/solutions/Intro";
import Phishing from "../components/solutions/Phishing";
import Spearphishing from "../components/solutions/Spearphishing";
import Quishing from "../components/solutions/Quishing";
import Whaling from "../components/solutions/Whaling";
import Smishing from "../components/solutions/Smishing";
import ContactPanel from "../components/contact/ContactPanel";

const Solutions = () => {
  return (
    <div className="solutions-container">
      <Intro />
      <Phishing />
      <Spearphishing />
      <Whaling />
      <Quishing />
      <Smishing />
      <ContactPanel />
      <Footer />
    </div>
  );
};

export default Solutions;
