import React, { useState } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import Product from "../product/Product";
import "./polo-styles.css";

const Polo = () => {
  const [poloData] = useState([
    {
      image:
        "https://o.remove.bg/downloads/c126f482-1487-47a3-8e8d-43dc22a2a96a/image-removebg-preview.png",
      title: "RED POLO",
      price: "25 $",
    },
    {
      image:
        "https://purepng.com/public/uploads/large/plain-black-polo-shirt-pab.png",
      title: "BLACK POLO",
      price: "20$",
    },
    {
      image:
        "https://www.pngall.com/wp-content/uploads/2016/04/Polo-Shirt-Free-Download-PNG.png",
      title: "GRAY POLO",
      price: "21$",
    },
    {
      image:
        "https://www.prada.com/content/dam/pradanux_products/U/UJN/UJN714/1YDPF0002/UJN714_1YDP_F0002_S_211_SLF.png",
      title: "BLACK POLO",
      price: "15$",
    },
    {
      image:
        "https://o.remove.bg/downloads/c81c2841-79c5-4809-8db4-c42d6a9405b2/image-removebg-preview.png",
      title: "GREEN POLO",
      price: "15$",
    },
    {
      image:
        "https://www.pngkit.com/png/full/836-8369889_some-details-about-performance-golf-polo-shirts-polo.png",
      title: "ORANGE POLO",
      price: "20$",
    },
    {
      image: "https://pngimg.com/uploads/polo_shirt/polo_shirt_PNG8140.png",
      title: "SKY BLUE POLO",
      price: "25$",
    },
    {
      image:
        "https://www.sportyfied.com/thumbs/regular/028250_55_manhattanpolo_f_700x700.png",
      title: "BLUE POLO",
      price: "30$",
    },
  ]);

  return (
    <div>
      <NavigationBar />
      <div className="polo__font">
        <h1>SUITS</h1>
      </div>
      <div className="polo__container">
        {poloData.map((data, index) => (
          <Product key={index} info={data} />
        ))}
      </div>
    </div>
  );
};

export default Polo;
