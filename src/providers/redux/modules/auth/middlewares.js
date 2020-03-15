import {
  fetchAuthRequest,
  fetchAuthSucces,
  fetchAuthFailure,
  fetchRegistrationRequest,
  fetchRegistrationSucces,
  fetchRegistrationFailure,
} from "./actions";
import axios from "axios";

export const loftTaxiMiddleware = store => next => async action => {
  if (action.type === fetchAuthRequest.toString()) {
    await axios
      .post(
        "http://loft-taxi.glitch.me/auth",
        { email: action.payload.login, password: action.payload.password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(data => {
        if (data.data.success === true) store.dispatch(fetchAuthSucces(data));
        else store.dispatch(fetchAuthFailure(data.data.error));
      })
      .catch(error => store.dispatch(fetchAuthFailure(error)));
  }

  if (action.type === fetchRegistrationRequest.toString()) {
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
        if (res.data.success === true) {
          store.dispatch(fetchRegistrationSucces(res));
        } else {
          store.dispatch(fetchRegistrationFailure(res.data.error));
        }
      })
      .catch(err => {
        fetchRegistrationFailure(err);
      });
  }

  const result = next(action);
  //localStorage.setItem("accessToken", store.getState().token);
  //console.log(store.getState().token);
  return result;
};
