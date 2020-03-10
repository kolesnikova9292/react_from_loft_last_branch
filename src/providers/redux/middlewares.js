import { getAuthRequest, getAuthSucces, getAuthFailure } from "./actions";
import axios from "axios";

export const loftTaxiMiddleware = store => next => async action => {
  if (action.type === getAuthRequest.toString()) {
    const response = await axios
      .post(
        "http://loft-taxi.glitch.me/auth",
        { email: action.payload.login, password: action.payload.password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(data => store.dispatch(getAuthSucces(data)))
      .catch(error => store.dispatch(getAuthFailure(error)));
  }

  return next(action);
};
