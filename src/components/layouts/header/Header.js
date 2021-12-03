import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { LOGOUT, SET_CURR_USER } from "../../../actions/actionTypes";
import "./Header.scss";
import HomeHeader from "./home-header/HomeHeader";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const showHeader = () => {
    switch (location.pathname) {
      case "/":
        return <HomeHeader />;
      case "/saved-videos":
        return (
          <div className="Header__saved-videos heading-font">
            <span>Saved Videos</span>
            <button
              onClick={() => navigate("/")}
              className="Header__create-new btn btn-success">
              Create New
            </button>
          </div>
        );
      case "/account":
        return (
          <div className="Header__account">
            <p className="heading-font">My Account</p>
            {user && (
              <button
                className="Logout__button"
                onClick={() => {
                  dispatch({ type: LOGOUT });
                }}>
                Logout
              </button>
            )}
          </div>
        );
      case "/login":
        return <p className="heading-font Header__signin">Sign In</p>;
      case "/sign-up":
        return <p className="heading-font Header__signup">Sign Up</p>;
      default:
        return <></>;
    }
  };

  return <div className="Header">{showHeader()}</div>;
};

export default Header;
