import React from "react";
import { useNavigate } from "react-router";
import "./HomeHeader.scss";

const HomeHeader = () => {
  const navigate = useNavigate();
  const saveVideo = () => {
    navigate("/saved-videos");
  };
  return (
    <div className="HomeHeader">
      <div className="HomeHeader__title">
        <p className="HomeHeader__title--text heading-font">
          Saying Hi to my customers
        </p>
        {/* <div className="HomeHeader__title--icon">&gt;</div> */}
      </div>
      <div className="HomeHeader__buttons">
        <button className="HomeHeader__button--cancel btn btn-secondary">
          Cancel
        </button>
        <button
          className="HomeHeader__button--save btn btn-success"
          onClick={saveVideo}>
          Save
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
