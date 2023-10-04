import React, { useState } from "react";
import "./LoginPanel.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const LoginPanel = ({ setLoginPanel, EmailIcon, PasswordIcon }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleLoginTry = async (e) => {
    e.preventDefault();
  };

  const handleLoginPanelClick = () => {
    // Toggle the loginPanel state when a button is clicked
    setLoginPanel((prevLoginPanel) => !prevLoginPanel);
  };

  return (
    <div className="login-panel-container">
      <div className="login-panel">
        <div className="login-title">Sign in</div>
        <form className="login-entries" onSubmit={handleLoginTry}>
          <div className="login-email-sign">Email</div>
          <div className="login-email">
            <img src={EmailIcon} className="login-email-icon" alt="Email" />
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="Type your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Icon
              className="passwordEye"
              onClick={handleToggle}
              icon={icon}
              size={25}
            />
          </div>
          <div className="login-forgot-password">Forgot password?</div>

          <div className="login-button-container">
            <button className="login-button">Sign in</button>
          </div>
        </form>
        <div className="login-sign-up-container">
          <div className="login-sign-up-or">Don't have an account?</div>
          <div className="login-sign-up" onClick={handleLoginPanelClick}>
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
