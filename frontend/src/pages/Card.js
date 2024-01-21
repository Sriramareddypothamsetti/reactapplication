import React from "react";
import "./Card.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imag} alt="hello" />
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
      </div>
    </div>
  );
};

export default Card;
