import React from "react";
import "./navbar-styles.css";
import { Link } from "react-router-dom";
import logo from "./kai clothing.png";

const NavigationBar = ({
  login,
  loginHandleOpen,
  signup,
  signupHandleOpen,
}) => {
  return (
    <div className="nav__containerlist">
      <img className="nav__logo" src={logo} alt="logo" />
      <ul className="nav__option">
        <nav className="nav__optionStore">
          <Link to="/Store" className="li">
            STORE
          </Link>
        </nav>
        <li onClick={() => loginHandleOpen(!login)}>SIGN IN</li>
        <li onClick={() => signupHandleOpen(!signup)}> SIGN UP</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
