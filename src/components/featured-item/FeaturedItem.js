import React from "react";
import "./featured-item-styles.css";

const FeaturedItem = () => {
  return (
    <div className="featured__container">
      <div>
        <img src="#" alt="tshirt" />
        <h1>PLAIN T-SHIRT</h1>
      </div>
      <div>
        <img src="#" alt="colored shirt" />
        <h1>COLORED SHIRT</h1>
      </div>
      <div>
        <img src="#" alt="tshirt" />
        <h1>OVERSIZED SHIRT</h1>
      </div>
    </div>
  );
};

export default FeaturedItem;
