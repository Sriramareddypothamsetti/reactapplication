import React, { useEffect, useState } from "react";
import "./Slide.css"; // Import your CSS file
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img4.png";
const images = [img1, img2, img3]; // Add more image URLs as needed

function Slide() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 6000); // Change slide every 2 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides ${index === slideIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}

      {/* Navigation buttons */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slide;
