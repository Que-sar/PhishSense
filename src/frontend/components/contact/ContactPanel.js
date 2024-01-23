import React, { useState } from "react";
import "./ContactPanel.css";

const ContactPanel = (prop) => {
  const titlerequired = prop.titlerequired;

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="email-submit-form">
      {titlerequired ? (
        <div className="services-title-sub-description">
          Contact us to customize your multi-phase assessment plan
        </div>
      ) : (
        " "
      )}
      <div className="in-touch-shortly">
        Please fill out the form and we will be in touch.
      </div>
      <div className="email-submit-form-container">
        <div className="email-titles-container">
          <div className="email-input-container">
            <div className="email">Email *</div>
            <input
              className="email-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="firstname-input-container">
            <div className="firstName">First Name</div>
            <input
              className="firstname-input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="lastname-input-container">
            <div className="firstName">Last Name</div>
            <input
              className="lastname-input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="phonenumber-input-container">
            <div className="phoneNumber">Phone Number</div>
            <input
              className="phonenumber-input"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="email-text-container">
          <div className="message">Get in touch...</div>

          <textarea
            className="email-text-input"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="email-submit-button-container">
        <div className="email-submit-button">Submit</div>
      </div>
    </div>
  );
};

export default ContactPanel;
