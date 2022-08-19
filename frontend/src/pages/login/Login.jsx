import logo from "../../assets/logoBlack.png";
import outlookLogo from "../../assets/outlookLogo.png";
import "./login.css";
import axios from "axios";

const Login = () => {
  const handleClick = async () => {
    try {
      const res = await axios.get("auth/outlook");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="login-card-container">
          <div className="login-card">
            <div className="login-logo">
              <img src={logo} className="logo-img" alt="..." />
            </div>
            <div className="welcome-message">
              <p>Welcome to IITG Campus OLX</p>
            </div>
            <div className="loginBtnContainer">
              <button className="login-btn" onClick={handleClick}>
                Login using
                <img src={outlookLogo} className="outlook-logo" alt="..." />
              </button>
            </div>
            <div className="footerLogin">
              <p>&copy;CAMPUS OLX {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
