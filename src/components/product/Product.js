import React from "react";
import "./product-styles.css";

const Product = () => {
  return (
    <div>
      <div className="product__container">
        <div className="product__product">
          <img
            className="product__image"
            src="https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png"
            alt="product"
          />
          <div className="product__size">Size</div>
          <ul className="product__details">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
          <div className="product__price">10 $</div>
          <button className="product__button">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
