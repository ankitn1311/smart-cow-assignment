import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SET_CURR_USER } from "../../actions/actionTypes";

import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectToSignUpPage = () => {
    navigate("/sign-up");
  };

  return (
    <div className="Login">
      <form
        className="Login__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: SET_CURR_USER, payload: true });
          navigate("/");
        }}>
        <div className="form-control">
          <label className="Login__form--email-label" forHtml="login-email">
            Email address
          </label>
          <input
            className="Login__form--email"
            type="email"
            placeholder="Enter your email"
            name="email"
            id="login-email"
          />
        </div>
        <div className="form-control">
          <label
            className="Login__form--password-label"
            forHtml="login-password">
            Password
            <span className="Login__form--forget">Forget?</span>
          </label>
          <input
            className="Login__form--password"
            type="password"
            placeholder="Enter your password"
            name="password"
            id="login-password"
          />
        </div>
        <button className="Login__form--submit btn btn-success" type="submit">
          Login
        </button>
        <p className="Sign__up">
          New here?{" "}
          <span class="Sign__up--text" onClick={redirectToSignUpPage}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
