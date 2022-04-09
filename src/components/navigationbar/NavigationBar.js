import React from "react";
import "./navbar-styles.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <div className="nav__logo">
        <img src="#" alt="logo" />
      </div>
      <div className="nav__containerlist">
        <ul className="nav__option">
          <nav className="nav__optionStore">
            <Link to="/Store" className="li">
              STORE
            </Link>
          </nav>
          <li>SIGN IN</li>
          <li>SIGN UP</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
