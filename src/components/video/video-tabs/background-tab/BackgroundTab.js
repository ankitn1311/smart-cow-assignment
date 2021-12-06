import React, { useState } from "react";
import "./BackgroundTab.scss";
import Images from "./images-content/Images";
import SolidColors from "./solid-colors-content/SolidColors";
import Videos from "./videos-content/Videos";

const BackgroundTab = () => {
  const [backgroundType, setBackgroundType] = useState("Images");

  const backgrounds = ["Images", "Solid Colors", "Videos"];

  const renderBackgroundData = () => {
    switch (backgroundType) {
      case "Images":
        return <Images />;
      case "Solid Colors":
        return <SolidColors />;
      case "Videos":
        return <Videos />;
      default:
        return null;
    }
  };

  return (
    <div className="Background">
      {backgrounds.map((background) => (
        <div
          key={background}
          onClick={() => setBackgroundType(background)}
          className={`Background__card ${
            background === backgroundType ? "Background__card--active" : ""
          }`}>
          <div className="Background__card--header">
            <div className="Background__card--name">{background}</div>
            <div className="Background__card--icon">&gt;</div>
          </div>
          {background === backgroundType && renderBackgroundData()}
        </div>
      ))}
      {/* // <div
        //   onClick={() => setActiveBackground(actor.name)}
        //   className={`Background__card ${
        //     actor.name === backgroundType && "Background__card--active"
        //   }`}>
        //   <img
        //     src={actor.image}
        //     alt="name"
        //     className="Background__card--image"
        //   />
        //   <div className="Background__card--name">{actor.name}</div>
        // </div>
        // */}
    </div>
  );
};

export default BackgroundTab;
