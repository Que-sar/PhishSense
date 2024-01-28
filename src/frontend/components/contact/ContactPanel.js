import React, { useState } from "react";
import "./ContactPanel.css";

const ContactPanel = (prop) => {
  const titlerequired = prop.titlerequired;

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const displayMessage = (success, message) => {
    setSubmitStatus({
      success: success,
      error: !success,
      message: message,
    });
  };

  const [inputValidity, setInputValidity] = useState({
    email: false,
    firstName: false,
    lastName: false,
    phoneNumber: false,
    message: false,
  });

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

  const handleSubmit = () => {
    setSubmitAttempted(true);
    const email = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d*$/;
    const injectionRegex = /[[\]{}"`'<>]/;

    const isEmailValid = emailRegex.test(email);
    const isPhoneValid =
      formData.phoneNumber === "" || phoneRegex.test(formData.phoneNumber);
    const isFirstNameValid =
      formData.firstName === "" || !injectionRegex.test(formData.firstName);
    const isLastNameValid =
      formData.lastName === "" || !injectionRegex.test(formData.lastName);
    const isMessageValid =
      formData.message === "" || !injectionRegex.test(formData.message);

    setInputValidity({
      email: isEmailValid,
      firstName: isFirstNameValid,
      lastName: isLastNameValid,
      phoneNumber: isPhoneValid,
      message: isMessageValid,
    });

    if (
      isEmailValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isPhoneValid &&
      isMessageValid
    ) {
      const submitData = {
        email: email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      };
      const requestBody = JSON.stringify(submitData);

      fetch(
        "https://dae9gzqvv6.execute-api.eu-west-2.amazonaws.com/production/data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody, // Use the formatted JSON string here
        }
      )
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
          if (data.statusCode === 200) {
            displayMessage(true, "Email sent successfully!");
          } else {
            displayMessage(false, `Failed to send email: ${data.message}`);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          displayMessage(false, "Failed to send email. Please try again.");
        });
    } else {
      displayMessage(false, "Invalid input detected. ");
    }
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
              className={`email-input ${
                !inputValidity.email && submitAttempted ? "invalid-input" : ""
              }`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="firstname-input-container">
            <div className="firstName">First Name</div>
            <input
              className={`firstname-input ${
                !inputValidity.firstName && submitAttempted
                  ? "invalid-input"
                  : ""
              }`}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="lastname-input-container">
            <div className="firstName">Last Name</div>
            <input
              className={`lastname-input ${
                !inputValidity.lastName && submitAttempted
                  ? "invalid-input"
                  : ""
              }`}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="phonenumber-input-container">
            <div className="phoneNumber">Phone Number</div>
            <input
              className={`phonenumber-input ${
                !inputValidity.phoneNumber && submitAttempted
                  ? "invalid-input"
                  : ""
              }`}
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
            className={`email-text-input ${
              !inputValidity.message && submitAttempted ? "invalid-input" : ""
            }`}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="email-submit-button-container">
        <div onClick={handleSubmit} className="email-submit-button">
          Submit
        </div>
      </div>
      {submitStatus.success || submitStatus.error ? (
        <div
          className={`submit-message ${
            submitStatus.success ? "success-message" : "error-message"
          }`}
        >
          {submitStatus.message}
        </div>
      ) : null}
    </div>
  );
};

export default ContactPanel;
