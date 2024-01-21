// Cart.js
import React, { useContext } from "react";
import "./Cart.css";
import { UserContext } from "./Cartnum";
import StarIcon from "@mui/icons-material/Star";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
const Cart = () => {
  const contextValue = useContext(UserContext);
  const { cartitems, increment } = contextValue;

  return (
    <div className="i12">
      {cartitems.map((item, index) => (
        <div className="card">
          <img src={item} alt="hello" />
          <div className="love-icon">
            <FavoriteBorderIcon />
          </div>
          <div className="card-details">
            <p>
              Price:$300 <strike>$700</strike>
            </p>
            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfSharpIcon />
            </div>
            <div className="del">
              <button className="delb">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
