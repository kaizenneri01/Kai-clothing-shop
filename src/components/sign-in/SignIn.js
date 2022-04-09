import React from "react";
import "./sign-in-styles.css";

const SignIn = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="signIn__overlay">
      <div className="signIn__modal">
        <img src="#" alt="logo" />
        <form className=" signIn__form">
          <label>
            {" "}
            Username:
            <input />{" "}
          </label>
          <label>
            {" "}
            Password:
            <input />{" "}
          </label>
          <label>
            {" "}
            Remeber me:
            <input />{" "}
          </label>
        </form>

        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default SignIn;
