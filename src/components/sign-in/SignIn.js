import React from "react";
import "./sign-in-styles.css";
import logo from "./kai clothing.png";

const SignIn = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="signIn__overlay">
      <div className="signIn__modal">
        <button onClick={onClose} className="signIn__close">
          X
        </button>
        <img className="sign__logo" src={logo} alt="logo" />
        <form className=" signIn__form">
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>

          <button className="signIn__login">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
