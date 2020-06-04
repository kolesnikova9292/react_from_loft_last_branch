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
      .get("https://loft-taxi.glitch.me/card?token=" + action.payload)
      .then(data => {
        if (data.statusText === "OK") {
          store.dispatch(fetchBankCardInformationSuccess(data));
        } else store.dispatch(fetchBankCardInformationFail(data.data.error));
      })
      .catch(error => store.dispatch(fetchBankCardInformationFail(error)));
  }

  if (action.type === fetchRegistrateMyBankCard.toString()) {
    await axios.post(
      "https://loft-taxi.glitch.me/card",
      {
        cardNumber: action.payload.cardNumberInputForm,
        expiryDate: action.payload.validityInputForm,
        cardName: action.payload.ownerInputForm,
        cvc: action.payload.cvcInputForm,
        token: action.payload.token,
      },
      {
        "Content-Type": "application/json",
      }
    );
  }

  const result = next(action);
  return result;
};
