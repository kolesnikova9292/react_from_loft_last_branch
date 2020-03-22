import {
  fetchBankCardInformation,
  fetchRegistrateMyBankCard,
  fetchRegistrateMyBankCardSuccess,
  fetchRegistrateMyBankCardFail,
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
} from "./actions";
import axios from "axios";

export const loftTaxiMiddlewareForBankCard = store => next => async action => {
  console.log(1111111111111);
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

  if (action.type === fetchRegistrateMyBankCard.toString()) {
    await axios
      .post(
        "http://loft-taxi.glitch.me/card",
        {
          cardNumber: action.payload.cardNumber,
          expiryDate: action.payload.validity,
          cardName: action.payload.owner,
          cvc: action.payload.cvc,
          token: action.payload.token,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then(data => {
        console.log(data);
        if (data.data.success === true)
          store.dispatch(fetchRegistrateMyBankCardSuccess(data));
        else store.dispatch(fetchRegistrateMyBankCardFail(data.data.error));
      })
      .catch(error => store.dispatch(fetchRegistrateMyBankCardFail(error)));
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
