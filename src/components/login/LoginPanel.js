import React from "react";
import "./LoginPanel.css";

const LoginPanel = () => {
  return (
    <div className="login-panel">
      <div className="login-image">Image</div>
      <div className="login-entries">
        <div className="login-email">Email</div>
        <div className="login-password">Password</div>
      </div>
    </div>
  );
};

export default LoginPanel;
