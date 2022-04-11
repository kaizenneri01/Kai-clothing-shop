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
    {
      image: "https://pngimg.com/uploads/jacket/jacket_PNG8058.png",
      title: "RED WINTER JACKET",
      price: "35$",
    },
    {
      image:
        "https://purepng.com/public/uploads/large/purepng.com-jacketclothingjacketfashion-men-dress-wear-cloth-coat-jacket-631522326867zvwfe.png",
      title: "BLUE SPORTS JACKET",
      price: "20$",
    },
    {
      image:
        "https://www.pngkey.com/png/full/89-896489_orange-jacket-png-image-jacket-png.png",
      title: "ORANGE WINTER JACKET",
      price: "45$",
    },
    {
      image: "https://www.downloadclipart.net/large/jacket-png-clipart.png",
      title: "BLACK DRY FIT JACKET",
      price: "30$",
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
