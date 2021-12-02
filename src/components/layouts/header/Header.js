import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SET_CURR_USER } from "../../../actions/actionTypes";
import "./Header.scss";
import HomeHeader from "./home-header/HomeHeader";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log("location", location);

  const showHeader = () => {
    switch (location.pathname) {
      case "/":
        return <HomeHeader />;
      case "/saved-videos":
        return <div className="heading-font">Saved Videos</div>;
      case "/account":
        return (
          <div className="Account__header">
            <p className="heading-font">Account</p>
            {user && (
              <button
                className="Logout__button"
                onClick={() => {
                  dispatch({ type: SET_CURR_USER, payload: false });
                }}>
                Logout
              </button>
            )}
          </div>
        );
      case "/login":
        return <p className="heading-font">Sign In</p>;
      case "/sign-up":
        return <p className="heading-font">Sign Up</p>;
      default:
        return <></>;
    }
  };

  return <div className="Header">{showHeader()}</div>;
};

export default Header;
