import React from "react";
import "./Item.css";
import { useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import { useContext } from "react";
import { UserContext } from "./Cartnum";
const Item = () => {
  const { category, id } = useParams();
  const imagePath = require(`../images/${category}/${category}${id}.jpg`);
  const { increment } = useContext(UserContext);
  return (
    <div className="items">
      <div className="me">
        <h3>Men Stylish Dress</h3>
      </div>
      <div className="stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfSharpIcon />
      </div>
      <div className="pic">
        <img src={imagePath} />
        <div className="love-icon">
          <FavoriteBorderIcon />
        </div>
      </div>
      <div className="matt">
        <p>
          Price: $300 <strike>$700</strike>
        </p>
        <div>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>
        <button onClick={() => increment(imagePath)} className="add">
          AddToCart
        </button>
        <p>
          Good Coloured cotton Stylish dress handmade by the special stylists in
          all over the world with mind-blowing
        </p>
      </div>
    </div>
  );
};

export default Item;
