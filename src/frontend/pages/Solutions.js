import React, { useLayoutEffect } from "react";
import "../components/solutions/Solutions.css";
import Intro from "../components/solutions/Intro";
import Phishing from "../components/solutions/Phishing";
import Spearphishing from "../components/solutions/Spearphishing";
import Quishing from "../components/solutions/Quishing";
import Whaling from "../components/solutions/Whaling";
import Smishing from "../components/solutions/Smishing";
import Workshop from "../components/solutions/Workshop";
import ContactPanel from "../components/contact/ContactPanel";
import { Helmet } from "react-helmet-async";
import Webapptest from "../components/solutions/Webapptest";

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
      "workshop",
      "webapptest",
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

  const solutionsStructuredData = {
    "@context": "http://schema.org",
    "@type": "EducationalOrganization",
    name: "Solutions - Speculor",
    description:
      "Explore our comprehensive solutions to raise awareness against email security threats. Learn about various phishing awareness campaigns, training workshops, and more.",
    url: window.location.href,
  };

  return (
    <section className="solutions-container">
      <Helmet>
        <title>Solutions - Speculor</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Solutions" />
        <meta
          property="og:description"
          content="Our solutions to raise awareness against email security threats comprise of various phishing awareness campaigns, accompanied by a report, as well as an optional, eye opener training."
        />
        <meta property="og:url" content={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify(solutionsStructuredData)}
        </script>
      </Helmet>
      <Intro />
      <div id="workshop" className="solution-section-white">
        <Workshop />
      </div>
      <div id="phishing" className="solution-section-orange">
        <Phishing />
      </div>
      <div id="spearphishing" className="solution-section-white">
        <Spearphishing />
      </div>
      <div id="whaling" className="solution-section-orange">
        <Whaling />
      </div>
      <div id="quishing" className="solution-section-white">
        <Quishing />
      </div>
      <div id="smishing" className="solution-section-orange">
        <Smishing />
      </div>
      <div id="webapptest" className="solution-section-white">
        <Webapptest />
      </div>
      <ContactPanel titlerequired={true} />
    </section>
  );
};

export default Solutions;
