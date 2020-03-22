import { createStore, applyMiddleware, compose } from "redux";
import { loftTaxiMiddleware } from "./modules/auth";
import { loftTaxiMiddlewareForBankCard } from "./modules/bankCard";
import thunk from "redux-thunk";
import rootReducer from "./modules";

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
  bankCard: {
    number: null,
    validity: null,
    owner: null,
    cvc: null,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(loftTaxiMiddleware),
    applyMiddleware(loftTaxiMiddlewareForBankCard)
  )
  /*compose(
    applyMiddleware(loftTaxiMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  )*/
);

export default store;
