import React from "react";
import "./LoginPanel.css";
import EmailIcon from "../images/loginIcons/emailIcon.svg";
import PasswordIcon from "../images/loginIcons/passwordIcon.svg";

const LoginPanel = () => {
  return (
    <div className="login-panel-container">
      <div className="login-panel">
        <div className="login-title">Sign in</div>
        <div className="login-entries">
          <div className="login-email-sign">Email</div>
          <div className="login-email">
            <img src={EmailIcon} className="login-email-icon" alt="Email" />
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="Type your email"
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
              type="password"
              id="password-input"
              name="password"
              placeholder="Type your password"
              required
            />
          </div>
          <div className="login-forgot-password">Forgot password?</div>
          <div className="login-button-container">
            <button className="login-button">Sign in</button>
          </div>
        </div>
        <div className="login-sign-up-container">
          <div className="login-sign-up-or">Don't have an account?</div>
          <div className="login-sign-up">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
