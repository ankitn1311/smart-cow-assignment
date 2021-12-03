import { SET_CURR_USER } from "../actions/actionTypes";

const initialState = {
  user: false,
};

// Reducer for authentication related data.

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURR_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
