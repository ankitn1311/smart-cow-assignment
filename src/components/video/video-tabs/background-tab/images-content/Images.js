import React, { useState } from "react";
import "./Images.scss";
import backgroundImage from "../../../../../assets/images/background.png";
import UploadIcon from "../../../../../assets/svg/UploadIcon";

const Images = () => {
  const [activeImage, setActiveImage] = useState("Office");

  const images = [
    { name: "Office", image: backgroundImage },
    { name: "Space", image: backgroundImage },
    { name: "Noise", image: backgroundImage },
    { name: "Meeting Room", image: backgroundImage },
    { name: "Books", image: backgroundImage },
  ];

  return (
    <div className="Image">
      <div className="Image__upload">
        <div className="Image__upload--image">
          <UploadIcon />
        </div>
        <div className="Image__upload--name">Upload</div>
      </div>
      {images.map((image) => (
        <div
          onClick={() => setActiveImage(image.name)}
          className={`Image__card ${
            image.name === activeImage && "Image__card--active"
          }`}>
          <img src={image.image} alt="name" className="Image__card--image" />
          <div className="Image__card--name">{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Images;
