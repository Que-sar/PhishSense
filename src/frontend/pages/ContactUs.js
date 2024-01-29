import React, { useEffect } from "react";
import ContactPanel from "../components/contact/ContactPanel";
import "../components/contact/ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us - Speculor";
  }, []);

  return (
    <div className="contact-us-page-container">
      <div className="contact-us-boxes-container">
        <h1 className="contact-us-title">
          Ready to Enhance Your Cybersecurity?
        </h1>
        <div className="contact-us-encouraging">
          Let's discuss how our tailored phishing assessment services can
          benefit your business. <br />
          Reach out to us today.
        </div>
      </div>
      <ContactPanel titlerequired={false} />
      <div className="business-info">
        <h2 className="contact-info-title">Contact Information</h2>
        <p className="contact-us-email">
          Email: <a href="mailto:info@speculor.uk">info@speculor.uk</a>
        </p>
        <p className="contact-us-phonenumber">Phone: +44 757 8866 102</p>
        <p className="contact-us-address">
          Flat 47, <br /> 12 Victoria Road, <br /> Dundee, <br /> DD1 1JN
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
