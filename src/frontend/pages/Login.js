import LoginPanel from "../components/login/LoginPanel";
import RegisterPanel from "../components/login/RegisterPanel";
import Footer from "../components/footer/Footer";
import Wave from "../components/wave/Wave";
import React, { useState } from "react";

const Login = () => {
  const [loginPanel, setLoginPanel] = useState(true);

  return (
    <>
      {loginPanel ? (
        <LoginPanel setLoginPanel={setLoginPanel} />
      ) : (
        <RegisterPanel setLoginPanel={setLoginPanel} />
      )}

      <Wave />
      <Footer />
    </>
  );
};

export default Login;
