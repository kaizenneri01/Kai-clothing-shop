import React, { useState } from "react";
import "./store-styles.css";
import StorePicture from "./streetpic.jpg";
import NavigationBar from "../../components/navigationbar/NavigationBar";

const Store = () => {
  const [data, setData] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80",
      description: "JACKET",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568306281824-7afe898030d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      description: "JACKET",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527718641255-324f8e2d0421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      description: "JACKET",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525828024186-5294af6c926d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description: "JACKET",
    },
    {
      image:
        "https://images.unsplash.com/photo-1636458938604-38cd6718ee43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      description: "JACKET",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description: "JACKET",
    },
  ]);

  return (
    <div>
      <NavigationBar />
      <div className="store__line">
        <h1 className="store__font">STORE</h1>
        <input className="store__searchbar" type="text" />
        <h1 className="store__category">CATEGORY</h1>
      </div>

      <div className="store__container">
        {data.map((item) => (
          <div className="store__box">
            <img className="store__image" src={item.image} alt="cloth" />
            <h1 className="store__text">JACKET</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
