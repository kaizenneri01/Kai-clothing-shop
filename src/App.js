import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Store from "./pages/store/Store";

function App() {
  return (
    <Routes>
      <Route path="/Store" element={<Store />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
