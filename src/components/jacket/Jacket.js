import React, { useState } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import Product from "../product/Product";
import "./jacket-styles.css";

const Jacket = () => {
  const [jacketData] = useState([
    {
      image:
        "https://www.pngall.com/wp-content/uploads/11/Black-Pullover-PNG.png",
      title: "BLACK HOODIE JACKET ",
      price: "25 $",
    },
    {
      image: "https://pngimg.com/uploads/hoodie/hoodie_PNG23.png",
      title: "PINK HOODIE JACKET",
      price: "25$",
    },
    {
      image:
        "https://ramptshirts.com/assets/images/samples/standard-hoodies/red.png",
      title: "RED HOODIE JACKET",
      price: "25$",
    },
    {
      image:
        "https://ramptshirts.com/assets/images/samples/standard-hoodies/orange.png",
      title: "ORANGE HOODIE JACKET",
      price: "25$",
    },
  ]);
  return (
    <div>
      <NavigationBar />
      <div className="jacket__font">
        <h1>JACKET</h1>
      </div>
      <div className="jacket__container">
        {jacketData.map((data, index) => (
          <Product key={index} info={data} />
        ))}
      </div>
    </div>
  );
};

export default Jacket;
