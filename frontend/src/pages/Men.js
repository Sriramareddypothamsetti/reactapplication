import React, { useEffect, useState } from "react";
import "./Men.css";
import Card from "./Card";
import { Link } from "react-router-dom";
const Men = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      try {
        const context = require.context(
          "../images/men",
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
        // Derive the product ID from the file name
        // Extract productId using regex
        const matchResult = path.match(/men(\d+)\./i);
        const productId = matchResult ? parseInt(matchResult[1], 10) : "";
        return (
          <Link to={`/product/men/${productId}`} key={index}>
            <Card imag={path} />
          </Link>
        );
      })}
    </div>
  );
};

export default Men;
