import {
  fetchBankCardInformation,
  fetchRegistrateMyBankCard,
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
} from "./actions";
import axios from "axios";

export const loftTaxiMiddlewareForBankCard = store => next => async action => {
  if (action.type === fetchBankCardInformation.toString()) {
    await axios
      .get("http://loft-taxi.glitch.me/card?token=" + action.payload.token)
      .then(data => {
        if (data.statusText === "OK") {
          store.dispatch(fetchBankCardInformationSuccess(data));
        } else store.dispatch(fetchBankCardInformationFail(data.data.error));
      })
      .catch(error => store.dispatch(fetchBankCardInformationFail(error)));
  }

  if (action.type === fetchRegistrateMyBankCard.toString()) {
    await axios.post(
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
    );
    // .then(data => {
    //   console.log(data);
    // });
  }

  const result = next(action);
  return result;
};
