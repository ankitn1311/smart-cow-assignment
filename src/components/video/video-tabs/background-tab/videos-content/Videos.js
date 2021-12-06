import React, { useState } from "react";
import "./Videos.scss";
import backgroundVideo from "../../../../../assets/images/videos.png";
import UploadIcon from "../../../../../assets/svg/UploadIcon";

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState("Office");

  const videos = [
    { name: "Office", video: backgroundVideo },
    { name: "Space", video: backgroundVideo },
    { name: "Noise", video: backgroundVideo },
    { name: "Meeting Room", video: backgroundVideo },
    { name: "Books", video: backgroundVideo },
  ];

  return (
    <div className="Videos">
      <div className="Videos__upload">
        <div className="Videos__upload--video">
          <UploadIcon />
        </div>
        <div className="Videos__upload--name">Upload</div>
      </div>
      {videos.map((video, index) => (
        <div
          key={index}
          onClick={() => setActiveVideo(video.name)}
          className={`Videos__card ${
            video.name === activeVideo && "Videos__card--active"
          }`}>
          <img src={video.video} alt="name" className="Videos__card--video" />
          <div className="Videos__card--name">{video.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
