import React, { useState } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import Product from "../product/Product";
import "./plainshirt-styles.css";

const PlainShirt = () => {
  const [shirtData] = useState([
    {
      image:
        "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png",
      title: "BLACK SHIRT",
      price: "10 $",
    },
    {
      image:
        "https://i.pinimg.com/originals/2f/bb/66/2fbb6650a2b6b07aee93909b1f248e24.png",
      title: "WHITE SHIRT",
      price: "10$",
    },
    {
      image: "https://pngimg.com/uploads/tshirt/tshirt_PNG5450.png",
      title: "EMERALD SHIRT",
      price: "10$",
    },
    {
      image:
        "https://i.pinimg.com/originals/6a/0a/38/6a0a38b0b44d22102579638d2ceee720.png",
      title: "BLUE FADED SHIRT",
      price: "10$",
    },
    {
      image: "https://pngimg.com/uploads/tshirt/tshirt_PNG5449.png",
      title: "PINK SHIRT",
      price: "10$",
    },
    {
      image:
        "https://o.remove.bg/downloads/46762d1d-aa75-420e-8e99-36d812163862/card_xlarge-removebg-preview.png",
      title: "BROWN SHIRT",
      price: "10$",
    },
    {
      image:
        "https://o.remove.bg/downloads/bcde0b3b-71eb-4d72-b280-9cd0c2008cae/image-removebg-preview.png",
      title: "ORANGE SHIRT",
      price: "10$",
    },
    {
      image:
        "https://i.pinimg.com/originals/c4/6f/3e/c46f3eaee3040bac33f977ef882ce31d.png",
      title: "NAVYBLUE SHIRT",
      price: "10$",
    },
  ]);

  return (
    <div>
      <NavigationBar />
      <div className="shirt__font">
        <h1>PLAIN SHIRT</h1>
      </div>
      <div className="shirt__container">
        {shirtData.map((data, index) => (
          <Product key={index} info={data} />
        ))}
      </div>
    </div>
  );
};

export default PlainShirt;
