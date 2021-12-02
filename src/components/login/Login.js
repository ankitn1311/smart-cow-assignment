import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SET_CURR_USER } from "../../actions/actionTypes";

import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="Login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: SET_CURR_USER, payload: true });
          navigate("/");
        }}>
        <input type="text" />
        <input type="password" name="" id="" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
