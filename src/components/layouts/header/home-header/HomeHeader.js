import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import "./HomeHeader.scss";

const HomeHeader = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [inputText, setInputText] = useState("Saying Hi to my customers");
  const [showOverlay, setShowOverlay] = useState(false);
  const saveVideo = () => {
    navigate("/saved-videos");
  };

  useEffect(() => {
    if (showOverlay) {
      inputRef.current.focus();
    }
  }, [showOverlay]);

  return (
    <div className="HomeHeader">
      <div className="HomeHeader__title" onClick={() => setShowOverlay(true)}>
        <p className="HomeHeader__title--text heading-font">{inputText}</p>
        <div
          onClick={() => setShowOverlay(true)}
          className="HomeHeader__title--icon">
          &gt;
        </div>
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
      {showOverlay && (
        <div className="HomeHeader__overlay">
          <div className="HomeHeader__overlay--header heading-font">
            <input
              className="HomeHeader__overlay--input"
              type="text"
              value={inputText}
              ref={inputRef}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className="HomeHeader__overlay--content">
            <div className="HomeHeader__overlay--text">
              Fusce quis magna vel ex pellentesque consequat sed et turpis.
              Vivamus bibendum rutrum euismod. Sed non sagittis est, semper
            </div>
            <div className="HomeHeader__overlay--badges">
              <div className="HomeHeader__overlay--badge">Email</div>
              <div className="HomeHeader__overlay--badge">Marketing</div>
              <div className="HomeHeader__overlay--badge">Greeting</div>
              <div className="HomeHeader__overlay--badge">Email</div>
              <div className="HomeHeader__overlay--badge">Marketing</div>
              <div className="HomeHeader__overlay--badge">Greeting</div>
            </div>
            <button
              className="HomeHeader__overlay--content--save btn btn-success"
              onClick={() => setShowOverlay(false)}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHeader;
