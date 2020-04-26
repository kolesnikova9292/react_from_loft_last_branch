import {
  fetchBankCardInformation,
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
  fetchRegistrateMyBankCard,
  fetchRegistrateMyBankCardFail,
  fetchRegistrateMyBankCardSuccess,
} from "./actions";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

/*cardNumber: action.payload.cardNumberInputForm,
        expiryDate: action.payload.validityInputForm,
        cardName: action.payload.ownerInputForm,
        cvc: action.payload.cvcInputForm,
        token: action.payload.token,*/

export function* paymentSaga() {
  console.log(111);
  yield takeEvery(fetchRegistrateMyBankCard, geteratorForPaymentSaga);

  yield takeEvery(
    fetchBankCardInformation,
    generatorForPaymentSagaGetInformation
  );
}

export function* generatorForPaymentSagaGetInformation(action) {
  try {
    const { token } = action.payload;
    console.log(action.payload);
    const result = yield call(
      fetchBankCardInformationGetInfoAxios,
      action.payload
    );
    console.log(result);
    console.log(result.statusText);
    if (result.statusText === "OK") {
      console.log(5555555555);
      yield put(fetchBankCardInformationSuccess(result));
    } else yield put(fetchBankCardInformationFail(result.data.error));
  } catch (error) {
    fetchBankCardInformationFail(error);
  }
}

export function* geteratorForPaymentSaga(action) {
  console.log(222);
  try {
    const {
      cardNumberInputForm,
      validityInputForm,
      ownerInputForm,
      cvcInputForm,
      token,
    } = action.payload;
    const result = yield call(
      fetchBankCardInformationRegistrateAxios,
      cardNumberInputForm,
      validityInputForm,
      ownerInputForm,
      cvcInputForm,
      token
    );
    console.log(result);
  } catch (error) {
    put(fetchBankCardInformationFail(error));
  }
}

export const fetchBankCardInformationRegistrateAxios = async (
  cardNumber,
  expiryDate,
  cardName,
  cvc,
  token
) => {
  return await axios.post(
    "https://loft-taxi.glitch.me/card",
    {
      cardNumber,
      expiryDate,
      cardName,
      cvc,
      token,
    },
    {
      "Content-Type": "application/json",
    }
  );
};

export const fetchBankCardInformationGetInfoAxios = async token => {
  console.log(token);
  return await axios.get("http://loft-taxi.glitch.me/card?token=" + token);
};
