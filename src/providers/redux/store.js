import { createStore, applyMiddleware, compose } from "redux";
import { loftTaxiMiddlewareForBankCard } from "./modules/bankCard";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import createSagaMiddleware from "redux-saga";
import Sagas from "./modules/saga";

const sagaMiddleware = createSagaMiddleware();

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
    //applyMiddleware(loftTaxiMiddleware),
    applyMiddleware(sagaMiddleware)
    //applyMiddleware(loftTaxiMiddlewareForBankCard)
  )
);

sagaMiddleware.run(Sagas);

export default store;
