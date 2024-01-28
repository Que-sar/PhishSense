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
        <div className="contact-us-title">
          Ready to Enhance Your Cybersecurity?
        </div>
        <div className="contact-us-encouraging">
          Let's discuss how our tailored phishing assessment services can
          benefit your business. <br />
          Reach out to us today.
        </div>
      </div>
      <ContactPanel titlerequired={false} />
      <div className="business-info">
        <h2 className="contact-info-title">Contact Information</h2>
        <p className="contact-us-email">Email: info@speculor.uk</p>
        <p className="contact-us-phonenumber">Phone: +1 234 567 8900</p>
      </div>
    </div>
  );
};

export default ContactUs;
