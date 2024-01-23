import React, { useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    document.title = "Solutions - Speculor";
    const hash = window.location.hash.slice(1);
    const validHashes = [
      "phishing",
      "spearphishing",
      "whaling",
      "quishing",
      "smishing",
    ];

    if (!hash) {
      window.scrollTo(0, 0);
    } else if (validHashes.includes(hash)) {
      const element = document.getElementById(hash);
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="solutions-container">
      <Intro />
      <div id="phishing" className="solution-section-white">
        <Phishing />
      </div>
      <div id="spearphishing" className="solution-section-orange">
        <Spearphishing />
      </div>
      <div id="whaling" className="solution-section-white">
        <Whaling />
      </div>
      <div id="quishing" className="solution-section-orange">
        <Quishing />
      </div>
      <div id="smishing" className="solution-section-white">
        <Smishing />
      </div>
      <ContactPanel titlerequired={true} />
      <Footer />
    </div>
  );
};

export default Solutions;
