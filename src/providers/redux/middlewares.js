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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const name = action.payload["name"];
    const surname = action.payload["surname"];
    const email = action.payload["email"];
    const password = action.payload["password"];

    // Request body
    const body = JSON.stringify({ name, surname, email, password });

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
        console.log(res);
        if (res.data.success == true) {
          console.log("000000");
          store.dispatch(getRegistrationSucces(res));
        } else {
          getRegistrationFailure(res.data.error);
        }
      })
      .catch(err => {
        getRegistrationFailure(err);
      });
  }

  /*if (action.type === getRegistrationRequest.toString()) {
    console.log("registrate");
    console.log(action.payload);
    console.log(action.payload.email);
    console.log(action.payload.password);
    console.log(action.payload.name);
    console.log(action.payload.surname);



    const name = action.payload.name;
    const surname = action.payload.surname;
    const email = action.payload.email;
    const password = action.payload.password;

    // Request body
    const body = JSON.stringify({ name, surname, email, password });

    await axios
      .post(
        "http://loft-taxi.glitch.me/register",
        body,
        {
          name: action.payload.name,
          surname: action.payload.surname,
          email: action.payload.email,
          password: action.payload.password,
        } 
      )
      .then(data => {
        console.log(data);
        if (data.data.success == true)
          store.dispatch(getRegistrationSucces(data));
        else store.dispatch(getRegistrationFailure(data.data.error));
      })
      .catch(error => store.dispatch(getRegistrationFailure(error)));
  }*/

  const result = next(action);
  //localStorage.setItem("accessToken", store.getState().token);
  //console.log(store.getState().token);
  return result;
};
