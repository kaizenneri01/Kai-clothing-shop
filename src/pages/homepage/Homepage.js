import React, { useEffect, useState } from "react";
import "./homepage-styles.css";
import FeaturedItem from "../../components/featured-item/FeaturedItem";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import BlackJacket from "./blackjacket.png";
import WomenJacket from "./women.png";

const Homepage = () => {
  const [gender, setGender] = useState("men");
  useEffect(() => {}, [gender]);
  return (
    <div>
      <NavigationBar />
      <ul className="home__gender">
        <li
          style={{
            color: gender === "men" && "#deae03",
          }}
          onClick={() => setGender("men")}
        >
          MEN
        </li>
        <li
          style={{
            color: gender === "women" && "#deae03",
          }}
          onClick={() => setGender("women")}
        >
          WOMEN
        </li>
      </ul>

      <div className="home__mainpage">
        <img
          className="home__jacket"
          src={gender === "men" ? BlackJacket : WomenJacket}
          alt="feature"
        />
        <div className="home__option">
          <h1
            className={gender === "women" ? "home__fontwomen" : "home__fontmen"}
          >
            {gender === "men" ? "BLACK COLD JACKET" : "GREEN DRY POLO"}
          </h1>
          <button className="home__btn1">SHOP NOW</button>
          <button className="home__btn2">OTHER JACKET</button>
          <button className="home__btn3">GO TO STORE</button>
        </div>
      </div>
      <FeaturedItem />
    </div>
  );
};

export default Homepage;
