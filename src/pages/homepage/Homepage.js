import React, { useState } from "react";
import "./homepage-styles.css";
import FeaturedItem from "../../components/featured-item/FeaturedItem";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import BlackJacket from "./blackjacket.png";
import WomenJacket from "./women.png";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const Homepage = () => {
  const [gender, setGender] = useState("men");
  const [signinOpen, setSigninOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div>
      <NavigationBar
        login={signinOpen}
        loginHandleOpen={(e) => setSigninOpen(e)}
        signup={signupOpen}
        signupHandleOpen={(e) => setSignupOpen(e)}
      />
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
      <SignIn sopen={signinOpen} sonClose={() => setSigninOpen(false)} />
      <SignUp suopen={signupOpen} suonClose={() => setSignupOpen(false)} />

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
