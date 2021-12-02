import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__main">
        <li className="Navbar__item">
          <Link to="/">Video</Link>
        </li>
        <li className="Navbar__item">
          <Link to="/saved-videos">Saved Videos</Link>
        </li>
        <li className="Navbar__item">
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
