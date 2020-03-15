import {
  getAuthRequest,
  getAuthSucces,
  getAuthFailure,
  getRegistrationRequest,
  getRegistrationSucces,
  getRegistrationFailure,
} from "./actions";
import axios from "axios";

export const loftTaxiMiddleware = store => next => async action => {
  if (action.type === getAuthRequest.toString()) {
    await axios
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

  if (action.type === getRegistrationRequest.toString()) {
    await axios
      .post(
        "https://loft-taxi.glitch.me/register",
        {
          name: action.payload.name,
          surname: action.payload.surname,
          email: action.payload.email,
          password: action.payload.password,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then(res => {
        if (res.data.success == true) {
          store.dispatch(getRegistrationSucces(res));
        } else {
          store.dispatch(getRegistrationFailure(res.data.error));
        }
      })
      .catch(err => {
        getRegistrationFailure(err);
      });
  }

  const result = next(action);
  //localStorage.setItem("accessToken", store.getState().token);
  //console.log(store.getState().token);
  return result;
};
