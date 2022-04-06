import React from "react";
import "./homepage-styles.css";
import FeaturedItem from "../../components/featured-item/FeaturedItem";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import BlackJacket from "./blackjacket.png";
import FeaturedData from "./Featured_item_data";

const Homepage = () => {
  console.log(FeaturedData);
  return (
    <div>
      <div>
        <NavigationBar />
        <div className="home__mainpage">
          <img className="home__jacket" src={BlackJacket} alt="feature" />
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
