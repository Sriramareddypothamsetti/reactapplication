import React, { useEffect, useState } from "react";
import "./Women.css";
import Card from "./Card";
import { Link } from "react-router-dom";
const Women = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      try {
        const context = require.context(
          "../images/women",
          false,
          /\.(png|jpe?g|svg)$/
        );
        const images = context.keys().map(context);
        setImagePaths(images);
      } catch (error) {
        console.error("Error importing images:", error);
      }
    };

    importImages();
  }, []);

  return (
    <div
      className={`image-gallery ${
        imagePaths.length % 4 !== 0 ? "image-gallery-last-row" : ""
      }`}
    >
      {imagePaths.map((path, index) => {
        const matchResult = path.match(/women(\d+)\./i);
        const productId = matchResult ? parseInt(matchResult[1], 10) : "";
        return (
          <Link to={`/product/women/${productId}`} key={index}>
            <Card imag={path} />
          </Link>
        );
      })}
      <style>
        {`
          .image-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
};

export default Women;
