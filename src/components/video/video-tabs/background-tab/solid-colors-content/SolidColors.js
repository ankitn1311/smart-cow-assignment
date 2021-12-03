import React, { useState, useEffect } from "react";
import "./SolidColors.scss";

const SolidColors = () => {
  const [activeSolidColors, setActiveSolidColors] = useState("Office");

  const images = [
    { name: "Green", value: "#00ff00" },
    { name: "Red", value: "#ff0000" },
    { name: "Blue", value: "#0000ff" },
    { name: "Yellow", value: "#ffff00" },
    { name: "Light Blue", value: "#00ffff" },
  ];

  useEffect(() => {
    console.log({ activeSolidColors });
  }, [activeSolidColors]);

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
