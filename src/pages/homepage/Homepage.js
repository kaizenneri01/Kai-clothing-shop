import React, { useEffect, useState } from "react";
import "./homepage-styles.css";
import FeaturedItem from "../../components/featured-item/FeaturedItem";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import BlackJacket from "./blackjacket.png";
import FeaturedData from "./Featured_item_data";
import WomenJacket from "./women.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [gender, setGender] = useState("men");
  useEffect(() => {}, [gender]);
  return (
    <div>
      <div>
        {/* <NavigationBar /> */}
        <div>
          <div className="nav__logo">
            <img src="#" alt="logo" />
          </div>
          <div className="nav__containerlist">
            <ul className="nav__gender">
              <li className="nav__li" onClick={() => setGender("men")}>
                MEN
              </li>
              <li className="nav__litwo" onClick={() => setGender("women")}>
                WOMEN
              </li>
            </ul>

            <ul className="nav__option">
              <nav className="nav__option">
                <Link to="/Store" className="li">
                  STORE
                </Link>
              </nav>
              <li>SIGN IN</li>
              <li>SIGN UP</li>
            </ul>
          </div>
        </div>

        <div className="home__mainpage">
          <img
            className="home__jacket"
            src={gender === "men" ? BlackJacket : WomenJacket}
            alt="feature"
          />
          <div className="home__option">
            <h1 className="home__font"> BLACK COLD JACKET</h1>
            <button className="home__btn1">SHOP NOW</button>
            <button className="home__btn2">OTHER JACKET</button>
            <button className="home__btn3">GO TO STORE</button>
          </div>
        </div>
        <FeaturedItem />
      </div>
    </div>
  );
};

export default Homepage;
