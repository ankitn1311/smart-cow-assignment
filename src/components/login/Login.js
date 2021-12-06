import React, { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CLEAR_ERROR, SET_CURR_USER } from "../../actions/actionTypes";
import "./Login.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return { ...state, email: action.payload, errorMessage: "" };
    case "PASSWORD_INPUT":
      return { ...state, password: action.payload, errorMessage: "" };
    case "SET_ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const [state, reducerDispatch] = useReducer(reducer, {
    email: "",
    password: "",
    errorMessage: "",
  });

  const redirectToSignUpPage = () => {
    navigate("/sign-up");
  };
  useEffect(() => {
    if (auth.user) {
      navigate("/");
      dispatch({ type: CLEAR_ERROR });
    }
  }, [auth.user, navigate, dispatch]);

  useEffect(() => {
    reducerDispatch({ type: "SET_ERROR", payload: auth.error });
  }, [auth.error, auth.user]);

  useEffect(() => {
    dispatch({ type: CLEAR_ERROR });
  }, [dispatch]);

  return (
    <div className="Login">
      <form
        className="Login__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: SET_CURR_USER,
            payload: { email: state.email, password: state.password },
          });
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
            value={state.email}
            required
            id="login-email"
            onChange={(e) =>
              reducerDispatch({ type: "EMAIL_INPUT", payload: e.target.value })
            }
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
            required
            placeholder="Enter your password"
            onChange={(e) =>
              reducerDispatch({
                type: "PASSWORD_INPUT",
                payload: e.target.value,
              })
            }
            name="password"
            id="login-password"
          />
        </div>
        <button className="Login__form--submit btn btn-success" type="submit">
          Login
        </button>
        <p className="Login__form--error">{state.errorMessage}</p>
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
