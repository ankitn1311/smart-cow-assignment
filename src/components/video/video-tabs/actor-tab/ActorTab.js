import React, { useState } from "react";
import "./ActorTab.scss";
import image from "../../../../assets/images/girl.png";

const ActorTab = () => {
  const [activeActor, setActiveActor] = useState("Anna");

  const actors = [
    { name: "Anna", image },
    { name: "YoYo", image },
    { name: "Skye", image },
    { name: "Mike", image },
    { name: "Vincent", image },
    { name: "Peter", image },
    { name: "May", image },
  ];

  return (
    <div className="Actor">
      {actors.map((actor, index) => (
        <div
          key={index}
          onClick={() => setActiveActor(actor.name)}
          className={`Actor__card ${
            actor.name === activeActor && "Actor__card--active"
          }`}>
          <img src={actor.image} alt="name" className="Actor__card--image" />
          <div className="Actor__card--name">{actor.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ActorTab;
