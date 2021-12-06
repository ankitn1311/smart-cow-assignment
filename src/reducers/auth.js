import {
  CLEAR_ERROR,
  LOGOUT,
  SET_CURR_USER,
  SIGN_UP,
} from "../actions/actionTypes";

const initialState = {
  user: false,
  users: [
    {
      name: "Demo",
      email: "demo@demo.com",
      password: "demo",
    },
  ],
  error: "",
  signUpSuccess: false,
};

// Reducer for authentication related data.

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      const user = state.users.find((user) => user.email === payload.email);
      if (user) return { ...state, error: "Already a user with this email!" };
      return {
        ...state,
        users: [...state.users, payload],
        error: "",
        signUpSuccess: true,
      };

    case LOGOUT:
      return { ...state, user: false };

    case CLEAR_ERROR:
      return { ...state, error: "", signUpSuccess: false };

    case SET_CURR_USER:
      const curr_user = state.users.find(
        (user) => user.email === payload.email
      );
      if (!curr_user)
        return { ...state, error: "Account doesn't not exist!", user: false };
      if (curr_user.password !== payload.password)
        return { ...state, error: "Password is incorrect!", user: false };
      return { ...state, user: true, error: "" };
    default:
      return state;
  }
};
