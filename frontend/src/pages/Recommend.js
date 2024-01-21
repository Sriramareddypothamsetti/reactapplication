import React from "react";
import Card from "./Card";
import "./Recommend.css";
import img1 from "../images/kids/kids3.jpg";
import img2 from "../images/men/men1.jpg";
import img3 from "../images/women/women2.jpg";
import img4 from "../images/kids/kids1.jpg";
const Recommend = () => {
  return (
    <>
      <div className="idxx">
        <h1>Recommended Products</h1>
      </div>
      <div className="i1">
        <Card imag={img1} />
        <Card imag={img2} />
        <Card imag={img3} />
        <Card imag={img4} />
      </div>
    </>
  );
};

export default Recommend;
