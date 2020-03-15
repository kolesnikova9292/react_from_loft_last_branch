import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { loftTaxiMiddleware } from "./middlewares";
import thunk from "redux-thunk";

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

/*const rootReducer = combineReducers({
  authReducer,
  registrationReducer,
});*/

const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
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
