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
      .then(data => {
        if (data.data.success == true) store.dispatch(getAuthSucces(data));
        else store.dispatch(getAuthFailure(data.data.error));
      })
      .catch(error => store.dispatch(getAuthFailure(error)));
  }

  const result = next(action);
  //localStorage.setItem("accessToken", store.getState().token);
  //console.log(store.getState().token);
  return result;
};
