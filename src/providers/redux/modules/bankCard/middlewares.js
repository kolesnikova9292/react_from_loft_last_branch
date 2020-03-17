import {
  fetchBankCardInformation,
  fetchRegistrateMyBankCard,
  fetchRegistrateMyBankCardSuccess,
  fetchRegistrateMyBankCardFail,
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
} from "./actions";
import axios from "axios";

export const loftTaxiMiddleware = store => next => async action => {
  if (action.type === fetchBankCardInformation.toString()) {
    await axios
      .get("http://loft-taxi.glitch.me/card?token=" + action.payload.token)
      .then(data => {
        if (data.data.success === true)
          store.dispatch(fetchBankCardInformationSuccess(data));
        else store.dispatch(fetchBankCardInformationFail(data.data.error));
      })
      .catch(error => store.dispatch(fetchBankCardInformationFail(error)));
  }

  /*if (action.type === fetchRegistrationRequest.toString()) {
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
  }*/

  const result = next(action);
  //localStorage.setItem("accessToken", store.getState().token);
  //console.log(store.getState().token);
  return result;
};
