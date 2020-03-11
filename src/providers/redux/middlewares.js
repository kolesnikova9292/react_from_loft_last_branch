import { getAuthRequest, getAuthSucces, getAuthFailure } from "./actions";
import axios from "axios";

export const loftTaxiMiddleware = store => next => async action => {
  if (action.type === getAuthRequest.toString()) {
    console.log(2);
    const response = await axios
      .post(
        "http://loft-taxi.glitch.me/auth",
        { email: action.payload.login, password: action.payload.password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(data => store.dispatch(getAuthSucces(data)))
      .catch(error => store.dispatch(getAuthFailure(error)));
  }

  console.log(store.getState());
  const result = next(action);
  console.log(store.getState());
  localStorage.setItem("accessToken", store.getState().token);

  return result;
};
