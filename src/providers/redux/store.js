import { createStore, applyMiddleware, compose, combineReducers } from "redux";
//import authReducer from "./modules/auth";
import { loftTaxiMiddleware } from "./modules/auth";
import thunk from "redux-thunk";
import rootReducer from "./modules";

//console.log(loftTaxiMiddleware);
console.log(rootReducer);

export const initialState = {
  auth: {
    token:
      localStorage.getItem("accessToken") == undefined
        ? null
        : localStorage.getItem("accessToken"),
    isAuthorized:
      localStorage.getItem("accessToken") == undefined ? false : true,
    error: null,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk), applyMiddleware(loftTaxiMiddleware))
  /*compose(
    applyMiddleware(loftTaxiMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  )*/
);

export default store;
