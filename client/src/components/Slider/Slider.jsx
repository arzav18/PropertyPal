import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  const remainingImages = images.length > 4 ? images.length - 4 : 0;

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="arrow left" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt={`Image ${imageIndex + 1}`} />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="arrow right" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt="Big preview"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages">
        {images.slice(1, 4).map((image, index) => (
          <img
            src={image}
            alt={`Small preview ${index + 1}`}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
        {remainingImages > 0 && (
          <div className="moreImages" onClick={() => setImageIndex(4)}>
            +{remainingImages} more
          </div>
        )}
      </div>
    </div>
  );
}

export default Slider;
