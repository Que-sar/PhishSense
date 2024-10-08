import React, { useEffect } from "react";
import ContactPanel from "../components/contact/ContactPanel";
import "../components/contact/ContactUs.css";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - Speculor";
  }, []);

  return (
    <div className="contact-us-page-container">
      <Helmet>
        <title>Contact Us - Speculor</title>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Ready to Enhance Your Cybersecurity?"
        />
        <meta
          property="og:description"
          content="Let's discuss how our tailored security testing services can benefit your business. Reach out to us today."
        />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <main className="contact-us-boxes-container">
        <h1 className="contact-us-title">
          Ready to Enhance Your Cybersecurity?
        </h1>
        <div className="contact-us-encouraging">
          Let's discuss how our tailored security testing services can benefit
          your business. <br />
          Reach out to us today.
        </div>
      </main>
      <ContactPanel titlerequired={false} />
      <div className="business-info">
        <h2 className="contact-info-title">Contact Information</h2>
        <p className="contact-us-email">
          Email: <a href="mailto:hello@speculor.uk">hello@speculor.uk</a>
        </p>
        <p className="contact-us-phonenumber">Phone: 0141 266 0227</p>
      </div>
    </div>
  );
};

export default ContactUs;
