import React from "react";
import girlImg from "../../assets/images/girl.png";
import "./SavedVideos.scss";

const SavedVideos = () => {
  const cards = [0];
  return (
    <div className="SavedVideos">
      {cards.map(() => (
        <div className="SavedVideos__card">
          <img src={girlImg} className="SavedVideos__card--image" />
          <div className="SavedVideos__card--title">Saying Hi to users!</div>
          <div className="SavedVideos__card--badges">
            <div className="SavedVideos__card--badge">Email</div>
            <div className="SavedVideos__card--badge">Marketing</div>
            <div className="SavedVideos__card--badge">Greeting</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedVideos;
