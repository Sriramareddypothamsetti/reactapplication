import React, { useEffect, useState } from "react";
import "./Kid.css";
import { Link } from "react-router-dom";
import Card from "./Card";
const Kid = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      try {
        const context = require.context(
          "../images/kids",
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
        const productId = path.split(".")[0].match(/\d+/)?.[0] || "";
        return (
          <Link to={`/product/kids/${productId}`} key={index}>
            <Card imag={path} />
          </Link>
        );

        /*<Card imag={path} />;*/
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

export default Kid;
