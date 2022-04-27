import React, { useState } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import Product from "../product/Product";
import "./tshirt-styles.css";
const Tshirt = () => {
  const [tShirtData] = useState([
    {
      image:
        "https://www.pngkey.com/png/full/245-2451282_ganesh-t-shirts-printing-happy-birthday-t-shirt.png",
      title: "GANESH T-SHIRT",
      price: "15 $",
    },
    {
      image:
        "https://www.pngarts.com/files/1/T-Shirt-Printing-PNG-Transparent-Image.png",
      title: "LOVE VALENTINE T-SHIRT",
      price: "10$",
    },
    {
      image:
        "https://o.remove.bg/downloads/87727517-7e7a-471a-8274-0ce2a3201fc2/image-removebg-preview.png",
      title: "GAMEOVER T-SHIRT",
      price: "20$",
    },
    {
      image:
        "https://o.remove.bg/downloads/0f23cba4-28cb-46fe-9664-c7aa20a43c78/image-removebg-preview.png",
      title: "RETRO TYOKO T-SHIRT",
      price: "20$",
    },
    {
      image:
        "https://o.remove.bg/downloads/5ecbe079-b7f3-4b3c-a74d-f63630b4694d/image-removebg-preview.png",
      title: "STRANGER THINGS T-SHIRT",
      price: "15$",
    },
    {
      image:
        "https://o.remove.bg/downloads/f1d2543e-66cd-4ebd-a604-03556a5d9b0d/have-a-nice-day-t-shirt-removebg-preview.png",
      title: "HAVE A NICEDAY T-SHIRT",
      price: "10$",
    },
    {
      image:
        "https://o.remove.bg/downloads/72ca317f-b3aa-4241-8d9a-79a07ba401b0/image-removebg-preview.png",
      title: "COVID T-SHIRT",
      price: "999$",
    },
    {
      image:
        "https://o.remove.bg/downloads/49bdd74e-1300-497f-9d8b-5b8d1a3e9abd/image-removebg-preview.png",
      title: "CYBER ACE T-SHIRT",
      price: "20$",
    },
  ]);

  return (
    <div>
      <NavigationBar />
      <div className="tshirt__font">
        <h1>T-SHIRT</h1>
      </div>
      <div className="tshirt__container">
        {tShirtData.map((data, index) => (
          <Product key={index} info={data} />
        ))}
      </div>
    </div>
  );
};

export default Tshirt;
