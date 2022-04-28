import React from "react";
import "./sign-up-styles.css";
import logo from "./kai clothing.png";

const SignUp = ({ suopen, suonClose }) => {
  if (!suopen) return null;
  return (
    <div className="signup__overlay">
      <div className="signup__modal">
        <button onClick={suonClose} className="signup__close">
          X
        </button>
        <img className="signup__logo" src={logo} alt="logo" />
        <form className=" signup__form">
          <label>
            Username:
            <input type="email" />
          </label>
          <label>
            Email address:
            <input type="password" />
          </label>
          <label>
            password:
            <input type="email" />
          </label>
          <label>
            Confirm Password:
            <input type="password" />
          </label>

          <button className="signup__login">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
