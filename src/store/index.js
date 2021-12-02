import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";

const initialState = [];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
