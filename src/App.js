import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Jacket from "./components/jacket product/Jacket";
import Homepage from "./pages/homepage/Homepage";
import Store from "./pages/store/Store";
import Suit from "./components/suit product/Suit";
import Tshirt from "./components/t-shirt product/Tshirt";
import PlainShirt from "./components/plain shirt product/PlainShirt";
import Sweater from "./components/sweater product/Sweater";
import Polo from "./components/polo product/Polo";

function App() {
  return (
    <Routes>
      <Route path="/Store" element={<Store />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/Store/Jacket" element={<Jacket />} />
      <Route path="/Store/Suits" element={<Suit />} />
      <Route path="/Store/T-shirt" element={<Tshirt />} />
      <Route path="/Store/PlainShirt" element={<PlainShirt />} />
      <Route path="/Store/Sweater" element={<Sweater />} />
      <Route path="/Store/Polo" element={<Polo />} />
    </Routes>
  );
}

export default App;
