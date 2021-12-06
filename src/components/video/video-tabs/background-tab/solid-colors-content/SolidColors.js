import React, { useState } from "react";
import "./SolidColors.scss";

const SolidColors = () => {
  const [activeSolidColors, setActiveSolidColors] = useState("Office");

  const images = [
    { name: "Green", value: "#06D6A0" },
    { name: "Red", value: "#EF476F" },
    { name: "Blue", value: "#1B9AAA" },
    { name: "Yellow", value: "#FFC43D" },
    { name: "Light Green", value: "#F8FFE5" },
  ];

  return (
    <div className="SolidColors">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => setActiveSolidColors(image.name)}
          className={`SolidColors__card ${
            image.name === activeSolidColors && "SolidColors__card--active"
          }`}>
          <div
            style={{ backgroundColor: image.value }}
            alt="name"
            className="SolidColors__card--color"></div>
          <div className="SolidColors__card--name">{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SolidColors;
