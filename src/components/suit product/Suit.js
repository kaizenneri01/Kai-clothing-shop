import React, { useState } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import Product from "../product/Product";
import "./suit-styles.css";

const Suit = () => {
  const [suitData] = useState([
    {
      image:
        "https://www.freepnglogos.com/uploads/suit-png/suit-png-transparent-image-pngpix-9.png",
      title: "BLACK CLASSIC SUIT",
      price: "110 $",
    },
    {
      image: "https://pngimg.com/uploads/suit/suit_PNG93252.png",
      title: "GRAY FADED SUIT",
      price: "250$",
    },
    {
      image: "http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf6f.png",
      title: "CARDINAL SUIT",
      price: "100$",
    },
    {
      image:
        "https://www.pngall.com/wp-content/uploads/2016/04/Suit-PNG-HD.png",
      title: "BLACK FORMAL SUIT",
      price: "210$",
    },
    {
      image:
        "https://www.transparentpng.com/thumb/blazer/sport-top-coat-blazer-clothing-coat-dress-fashion-style-suit-photo-19.png",
      title: "GRAY CLASSIC SUIT",
      price: "110$",
    },
    {
      image: "https://pngimg.com/uploads/suit/small/suit_PNG93229.png",
      title: "CHIVALROUS SUIT",
      price: "210$",
    },
    {
      image: "https://pngimg.com/uploads/suit/small/suit_PNG93227.png",
      title: "DETECTIVE SUIT",
      price: "245$",
    },
    {
      image: "https://www.pngmart.com/files/15/Check-Blazer-PNG.png",
      title: "WINTER GRAY SUIT",
      price: "300$",
    },
  ]);

  return (
    <div>
      <NavigationBar />
      <div className="suit__font">
        <h1>SUITS</h1>
      </div>
      <div className="suit__container">
        {suitData.map((data, index) => (
          <Product key={index} info={data} />
        ))}
      </div>
    </div>
  );
};

export default Suit;
