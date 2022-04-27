import React, { useState } from "react";
import NavigationBar from "../navigationbar/NavigationBar";
import Product from "../product/Product";
import "./polo-styles.css";

const Polo = () => {
  const [poloData] = useState([
    {
      image: "https://pngimg.com/uploads/sweater/sweater_PNG50.png",
      title: "GRAY SWEATER",
      price: "25 $",
    },
    {
      image: "https://pngimg.com/uploads/sweater/sweater_PNG9.png",
      title: "GRAY JUMPER SWEATER",
      price: "20$",
    },
    {
      image: "https://www.downloadclipart.net/large/sweater-png-hd.png",
      title: "YELLOWISH SWEATER",
      price: "21$",
    },
    {
      image:
        "https://o.remove.bg/downloads/94d07821-2ad7-4434-8480-90bade4145fa/image-removebg-preview.png",
      title: "PINK SWEATER",
      price: "15$",
    },
    {
      image:
        "https://www.pngkit.com/png/full/117-1178063_sweater-png-pic-red-sweater-from-the-story.png",
      title: "RED SWEATER",
      price: "15$",
    },
    {
      image: "https://www.picng.com/upload/sweater/png_sweater_27852.png",
      title: "BLUE JUMPER SWEATER",
      price: "20$",
    },
    {
      image:
        "https://www.pngplay.com/wp-content/uploads/2/Sweater-PNG-HD-Quality.png",
      title: "BROWN SWEATER",
      price: "25$",
    },
    {
      image:
        "https://www.pngkey.com/png/full/53-536559_stranger-things-merry-christmas-ugly-sweater-overwatch-ugly.png",
      title: "MERRY CHRISTMAS SWEATER",
      price: "500$",
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
