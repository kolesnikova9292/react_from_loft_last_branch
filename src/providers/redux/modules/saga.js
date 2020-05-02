import { authorizationSaga } from "./auth/authorizationSaga ";
import { takeEvery, call, all } from "redux-saga/effects";
import { registrationSaga } from "./auth/registrationSaga";
import { paymentSaga } from "./bankCard/paymentSaga";
import { addressListSaga } from "./adresses/addressListSaga";

export default function* Sagas() {
  yield all([
    authorizationSaga(),
    registrationSaga(),
    paymentSaga(),
    addressListSaga(),
  ]);
}
