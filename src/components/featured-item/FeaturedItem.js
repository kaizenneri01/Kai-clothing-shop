import React from "react";
import "./featured-item-styles.css";

const FeaturedItem = () => {
  return (
    <div className="featured__item">
      <div className="featured__font">FEATURED</div>
      <div className="featured__container">
        <div className="featured__picture">
          <img
            src="https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png"
            alt="tshirt"
          />
          <div className="featured__text">
            <p>PLAIN T-SHIRT</p>
            <p>SEE ALL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
