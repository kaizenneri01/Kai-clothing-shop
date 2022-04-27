import React from "react";
import "./featured-item-styles.css";
import FeaturedData from "./Featured_item_data";

const FeaturedItem = () => {
  return (
    <div className="featured__item">
      <div className="featured__font">FEATURED</div>
      <div className="featured__container">
        {FeaturedData.map((info, indx) => (
          <div key={indx} className="featured__picture">
            <img src={info.image} alt="tshirt" />
            <div className="featured__text">
              <p>{info.description}</p>
              <p>{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItem;
