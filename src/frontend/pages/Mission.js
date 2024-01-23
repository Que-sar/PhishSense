import Footer from "../components/footer/Footer.js";
import { Link } from "react-router-dom";
import "../components/mission/Mission.css";
import logo from "../components/images/speculorlogo.png";
import ContactPanel from "../components/contact/ContactPanel.js";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Mission - Speculor";
  }, []);

  return (
    <div className="about-container">
      <div className="mission-container">
        <div className="logo-panel">
          <Link className="mission-logo-inside" to="/">
            <img src={logo} alt="Logo" className="logo-img-mission" />
            <div className="mission-title">Speculor</div>
          </Link>
        </div>
        <div className="name-explanation-quote-container">
          <div className="name-explanation-title">
            Your Proactive Partner in Cybersecurity
          </div>
          <div className="name-explanation-text">
            In a world brimming with digital threats, Speculor stands as a
            guardian in the realm of cybersecurity. <br />
            <br />
            Our name, inspired by the Latin 'to watch, observe, examine,'
            captures the essence of our mission: to equip businesses of all
            sizes with effective and affordable phishing awareness solutions.{" "}
            <br />
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
            comprehensive phishing awareness solutions — including general
            phishing assessments, spearphishing, whaling, QR code phishing, and
            smishing (SMS phishing) — at an accessible and affordable level.{" "}
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
      <Footer />
    </div>
  );
};

export default About;
