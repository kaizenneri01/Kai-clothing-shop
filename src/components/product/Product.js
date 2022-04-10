import React from "react";
import "./product-styles.css";

const Product = ({ info }) => {
  return (
    <div className="product__container">
      <div className="product__product">
        <img className="product__image" src={info.image} alt="product" />
        <div className="product__title">{info.title}</div>
        <div className="product__size">Size</div>
        <ul className="product__details">
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </ul>
        <div className="product__price">{info.price}</div>
        <button className="product__button">BUY</button>
      </div>
    </div>
  );
};

export default Product;
