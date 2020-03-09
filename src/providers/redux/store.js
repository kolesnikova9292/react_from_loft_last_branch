import { createStore, applyMiddleware, compose } from "redux";
import reducer, { initialState } from "./reducer";
import { loftTaxiMiddleware } from "./middlewares";
import thunk from "redux-thunk";

const store = createStore(
  reducer,
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
