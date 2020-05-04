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

export function* paymentSaga() {
  yield takeEvery(fetchRegistrateMyBankCard, geteratorForPaymentSaga);

  yield takeEvery(
    fetchBankCardInformation,
    generatorForPaymentSagaGetInformation
  );
}

export function* generatorForPaymentSagaGetInformation(action) {
  try {
    const { token } = action.payload;
    const result = yield call(
      fetchBankCardInformationGetInfoAxios,
      action.payload
    );
    if (result.statusText === "OK") {
      yield put(fetchBankCardInformationSuccess(result));
    } else yield put(fetchBankCardInformationFail(result.data.error));
  } catch (error) {
    fetchBankCardInformationFail(error);
  }
}

export function* geteratorForPaymentSaga(action) {
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
  return await axios.get("http://loft-taxi.glitch.me/card?token=" + token);
};
