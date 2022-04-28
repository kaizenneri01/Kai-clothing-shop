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
          <label className="signup__label">
            Username:
            <input className="signup__input" type="email" />
          </label>
          <label className="signup__label">
            Email address:
            <input className="signup__input" type="password" />
          </label>
          <label className="signup__label">
            password:
            <input className="signup__input" type="email" />
          </label>
          <label className="signup__label">
            Confirm Password:
            <input className="signup__input" type="password" />
          </label>

          <button className="signup__login">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
