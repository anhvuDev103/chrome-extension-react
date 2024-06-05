import React from "react";
import "../assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const Popup = () => {
  console.log("ahih");

  return (
    <div>
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/about">About</a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Popup;
