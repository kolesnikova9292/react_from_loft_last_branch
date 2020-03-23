import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import auth from "../providers/redux/modules/auth";
import bankCard from "../providers/redux/modules/bankCard";

import { loftTaxiMiddleware } from "../providers/redux/modules/auth";
import { loftTaxiMiddlewareForBankCard } from "../providers/redux/modules/bankCard";

export function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(
      combineReducers({
        auth,
        bankCard,
      }),
      initialState,
      compose(
        applyMiddleware(thunk),
        applyMiddleware(loftTaxiMiddleware),
        applyMiddleware(loftTaxiMiddlewareForBankCard)
      )
    ),
  } = {}
) {
  console.log(store.isAuthorized);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}
