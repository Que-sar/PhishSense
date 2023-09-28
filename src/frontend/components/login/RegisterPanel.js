import React, { useState } from "react";
import "./RegisterPanel.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const RegisterPanel = ({ EmailIcon, PasswordIcon }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="register-panel-container">
      <div className="register-panel">
        <div className="register-title">Sign up</div>
        <div className="register-entries">
          <div className="register-first-name-sign">First name</div>
          <div className="register-first-name">
            <input
              type="text"
              id="register-firstname-input"
              name="firstname"
              placeholder="First name"
              required
            />
          </div>
          <div className="register-last-name-sign">Last name</div>
          <div className="register-last-name">
            <input
              type="text"
              id="register-lastname-input"
              name="lastname"
              placeholder="Last name"
              required
            />
          </div>
          <div className="register-email-sign">Email</div>
          <div className="register-email">
            <img src={EmailIcon} className="register-email-icon" alt="Email" />
            <input
              type="email"
              id="register-email-input"
              name="email"
              placeholder="Type your email"
              required
            />
          </div>
        </div>
        <div className="login-password-sign">Password</div>
        <div className="login-password">
          <img
            src={PasswordIcon}
            className="login-password-icon"
            alt="Password"
          />
          <input
            type={type}
            id="password-input"
            name="password"
            placeholder="Type your password"
            autoComplete="current-password"
          />
          <Icon
            className="passwordEye"
            onClick={handleToggle}
            icon={icon}
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;
