import React from "react";
import { Link } from "react-router-dom";
import VideoIcon from "../../../assets/svg/Video";
import SavedVideosIcon from "../../../assets/svg/SavedVideo";
import "./Navbar.scss";
import AccountIcon from "../../../assets/svg/Account";
import MainIcon from "../../../assets/svg/MainIcon";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__main">
        <span className="Navbar__top">
          <li className="Navbar__item">
            <Link to="/">
              <MainIcon />
            </Link>
          </li>
          <li className="Navbar__item ">
            <Link to="/">
              <VideoIcon />
            </Link>
          </li>
          <li className="Navbar__item">
            <Link to="/saved-videos">
              <SavedVideosIcon />
            </Link>
          </li>
        </span>

        <li className="Navbar__item">
          <Link to="/account">
            <AccountIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
