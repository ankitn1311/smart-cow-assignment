import React from "react";
import girlImg from "../../assets/images/girl.png";
import VideoTabs from "./video-tabs/VideoTabs";
import "./Video.scss";

const Video = () => {
  return (
    <div className="Video">
      <div className="Video__preview">
        <div className="Video__preview--card">
          <div className="Video__preview--card--top">
            <img
              className="Video__preview--card--image"
              src={girlImg}
              alt="preview_image"
            />
            <button className="Video__preview--card--button-position btn btn-secondary">
              Preview
            </button>
          </div>
          <div className="Video__preview--card--bottom">
            <textarea rows="3" className="Video__preview--card--text">
              Type or paste your videoscript here. You can also request a
              translation of an English script to any of 27 other languages
            </textarea>
            <div className="Video__preview--card--button btn btn-secondary">
              Listen
            </div>
          </div>
        </div>
      </div>
      <div className="Video__tabs">
        <VideoTabs />
      </div>
    </div>
  );
};

export default Video;
