import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CLEAR_ERROR, SET_CURR_USER, SIGN_UP } from "../../actions/actionTypes";
import "./SignUp.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME_INPUT":
      return { ...state, name: action.payload };
    case "EMAIL_INPUT":
      return { ...state, email: action.payload };
    case "PASSWORD_INPUT":
      let strength = "";
      if (action.payload.length === 0) {
        strength = "";
      } else if (action.payload.length <= 3) {
        strength = "Weak";
      } else if (action.payload.length <= 7) {
        strength = "Medium";
      } else {
        strength = "Strong";
      }
      return { ...state, password: action.payload, pStrength: strength };
    default:
      return state;
  }
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [state, reducerDispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
    pStrength: "",
    error: "",
  });

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (auth.error) {
      reducerDispatch({ type: "SET_ERROR", payload: auth.error });
    }
  }, [auth.error]);

  useEffect(() => {
    if (auth.signUpSuccess) {
      redirectToLoginPage();
    }
  }, [auth.signUpSuccess]);

  return (
    <div className="SignUp">
      <form
        className="SignUp__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: SIGN_UP,
            payload: {
              email: state.email,
              name: state.name,
              password: state.password,
            },
          });
        }}>
        <div className="form-control">
          <label className="SignUp__form--name-label" forHtml="signup-name">
            Name
          </label>
          <input
            className="SignUp__form--name"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            value={state.name}
            onChange={(e) =>
              reducerDispatch({ type: "NAME_INPUT", payload: e.target.value })
            }
            id="signup-name"
          />
        </div>
        <div className="form-control">
          <label className="SignUp__form--email-label" forHtml="signup-email">
            Email address
          </label>
          <input
            className="SignUp__form--email"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            onChange={(e) =>
              reducerDispatch({ type: "EMAIL_INPUT", payload: e.target.value })
            }
            value={state.email}
            id="signup-email"
          />
        </div>
        <div className="form-control">
          <label
            className="SignUp__form--password-label"
            forHtml="SignUp-password">
            Password
            <span className={`SignUp__form--strong--${state.pStrength}`}>
              {state.pStrength}
            </span>
          </label>
          <input
            className="SignUp__form--password"
            type="password"
            placeholder="Enter your password"
            value={state.password}
            required
            onChange={(e) =>
              reducerDispatch({
                type: "PASSWORD_INPUT",
                payload: e.target.value,
              })
            }
            name="password"
            id="SignUp-password"
          />
        </div>
        <button className="SignUp__form--submit btn btn-success" type="submit">
          Sign up
        </button>
        <p className="Sign__up">
          Already user?
          <span
            class="Sign__up--text"
            onClick={() => {
              dispatch({ type: CLEAR_ERROR });
              redirectToLoginPage();
            }}>
            Login
          </span>
        </p>
        <p className="Login__form--error">{auth.error}</p>
      </form>
    </div>
  );
};

export default SignUp;
