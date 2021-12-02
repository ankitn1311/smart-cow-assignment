import React from "react";
import { Link } from "react-router-dom";
import VideoIcon from "../../../assets/svg/Video";
import SavedVideosIcon from "../../../assets/svg/SavedVideo";
import "./Navbar.scss";
import AccountIcon from "../../../assets/svg/AccountIcon";
import MainIcon from "../../../assets/svg/MainIcon";
import { useLocation } from "react-router";
import VideoActiveIcon from "../../../assets/svg/VideoActive";
import SavedVideoActiveIcon from "../../../assets/svg/SavedVideoActive";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  return (
    <div className="Navbar">
      <ul className="Navbar__main">
        <span className="Navbar__top">
          <li className="Navbar__item">
            <Link to="/">
              <MainIcon />
            </Link>
          </li>
          {user && (
            <>
              <li className="Navbar__item ">
                <Link to="/">
                  {pathname === "/" ? <VideoActiveIcon /> : <VideoIcon />}
                </Link>
              </li>
              <li className="Navbar__item">
                <Link to="/saved-videos">
                  {pathname === "/saved-videos" ? (
                    <SavedVideoActiveIcon />
                  ) : (
                    <SavedVideosIcon />
                  )}
                </Link>
              </li>
            </>
          )}
        </span>
        {user && (
          <li className="Navbar__item">
            <Link to="/account">
              <AccountIcon />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
