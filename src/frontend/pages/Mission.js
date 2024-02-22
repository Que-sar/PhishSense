import { Link } from "react-router-dom";
import "../components/mission/Mission.css";
import logo from "../components/images/speculorlogo.webp";
import ContactPanel from "../components/contact/ContactPanel.js";
import { Helmet } from "react-helmet-async";

const Mission = () => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "Mission - Speculor",
    description:
      "At Speculor, we blend vigilance with innovation, transforming the complexity of cybersecurity into clear, actionable strategies. Let's journey together towards a safer digital future.",
    url: "https://www.speculor.uk/mission",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.speculor.uk/static/media/speculorlogo.2dea119f4ffa4b3bc88d.webp",
      width: 1200,
      height: 800,
    },
  };
  return (
    <article className="about-container">
      <Helmet>
        <title>Mission - Speculor</title>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Your Proactive Partner in Cybersecurity"
        />
        <meta
          name="description"
          content="At Speculor, we blend vigilance with innovation, transforming the complexity of cybersecurity into clear, actionable strategies. Let's journey together towards a safer digital future."
        />
        <meta
          property="og:image"
          content="https://www.speculor.uk/static/media/speculorlogo.2dea119f4ffa4b3bc88d.webp"
        />
        <meta property="og:url" content="https://www.speculor.uk/mission" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="mission-container">
        <div className="logo-panel">
          <Link className="mission-logo-inside" to="/">
            <img src={logo} alt="Logo" className="logo-img-mission" />
            <div className="mission-title">Speculor</div>
          </Link>
        </div>
        <div className="name-explanation-quote-container">
          <h1 className="name-explanation-title">
            Your Proactive Partner in Cybersecurity
          </h1>
          <div className="name-explanation-text">
            In a world brimming with digital threats, Speculor stands as a
            guardian in the realm of cybersecurity. <br />
            <br />
            Our name, inspired by the Latin 'to watch, observe, examine,'
            captures the essence of our mission: to equip businesses of all
            sizes with effective and affordable web-application testing and
            email security awareness solutions. <br />
            <br />
            At Speculor, we blend vigilance with innovation, transforming the
            complexity of cybersecurity into clear, actionable strategies. Let's
            journey together towards a safer digital future.
          </div>
        </div>
        <div className="mission-statement-container">
          <div className="mission-statement-title"> Our Mission </div>
          <div className="mission-statement-text">
            Our mission at Speculor is to revolutionize cybersecurity
            accessibility, especially for smaller businesses. We recognize that
            professional-grade cybersecurity has often been a resource-intensive
            endeavor, putting it out of reach for many. <br />
            <br />
            Speculor is changing that narrative. We are committed to providing
            comprehensive web-application security testing and email security
            awareness solutions — including general phishing assessments,
            spearphishing, whaling, QR code phishing, and SMS phishing — at an
            accessible and affordable level
            <br />
            <br />
            We believe that every business, regardless of its size, deserves the
            tools and knowledge to protect itself in the digital domain. Our
            services are designed not just to identify threats, but to educate
            and empower businesses, turning vulnerabilities into strengths.
            Through Speculor, cybersecurity ceases to be a privilege; it becomes
            an integral, attainable part of every business's strategy.
          </div>
        </div>
      </div>
      <div className="placeholder-margins-broken"></div>
      <ContactPanel titlerequired={true} />
    </article>
  );
};

export default Mission;
