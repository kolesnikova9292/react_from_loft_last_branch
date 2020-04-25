import { handleAuthentification } from "./auth/sagas";
import { takeEvery, call, all } from "redux-saga/effects";

export default function* Sagas() {
  yield all([handleAuthentification()]);
}
