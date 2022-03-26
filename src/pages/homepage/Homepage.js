import React from "react";
import FeaturedItem from "../../components/featured-item/FeaturedItem";
import NavigationBar from "../../components/navigationbar/NavigationBar";

const Homepage = () => {
  return (
    <div>
      <div>
        <NavigationBar />
        <div>
          <img src="#" alt="feature" />
          <h1> BLACK COLD JACKET</h1>
          <div>
            <button>SHOP NOW</button>
            <button>OTHER JACKET</button>
            <button>GO TO STORE</button>
          </div>
        </div>
        <FeaturedItem />
      </div>
    </div>
  );
};

export default Homepage;
