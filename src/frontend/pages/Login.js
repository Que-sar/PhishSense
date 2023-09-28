import LoginPanel from "../components/login/LoginPanel";
import RegisterPanel from "../components/login/RegisterPanel";
import Footer from "../components/footer/Footer";
import Wave from "../components/wave/Wave";
import React, { useState } from "react";
import EmailIcon from "../components/images/loginIcons/emailIcon.svg";
import PasswordIcon from "../components/images/loginIcons/passwordIcon.svg";

const Login = () => {
  const [loginPanel, setLoginPanel] = useState(true);

  return (
    <>
      {loginPanel ? (
        <LoginPanel
          EmailIcon={EmailIcon}
          PasswordIcon={PasswordIcon}
          setLoginPanel={setLoginPanel}
        />
      ) : (
        <RegisterPanel
          EmailIcon={EmailIcon}
          PasswordIcon={PasswordIcon}
          setLoginPanel={setLoginPanel}
        />
      )}

      <Wave />
      <Footer />
    </>
  );
};

export default Login;
