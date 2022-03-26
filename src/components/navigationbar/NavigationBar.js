import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <div className="nav__logo">
        <img src="#" alt="logo" />
      </div>
      <div className="nav__containerlist">
        <ul className="nav__gender">
          <li>MEN</li>
          <li>WOMEN</li>
        </ul>

        <ul className="nav__option">
          <li>STORE</li>
          <li>SIGN IN</li>
          <li>SIGN UP</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
