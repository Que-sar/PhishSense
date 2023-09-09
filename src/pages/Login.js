import LoginPanel from "../components/login/LoginPanel";
import "../components/login/Login.css";
import Footer from "../components/footer/Footer";

const Login = () => {
  return (
    <div className="logreg-container">
      <LoginPanel />
      <Footer />
    </div>
  );
};

export default Login;
