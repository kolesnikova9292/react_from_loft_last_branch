import { takeEvery, call, put } from "redux-saga/effects";
import { fetchAuthRequest, fetchAuthSucces, fetchAuthFailure } from "./actions";
import axios from "axios";

export function* authorizationSaga() {
  yield takeEvery(fetchAuthRequest, authGeneratorFunction);
}

export function* authGeneratorFunction(action) {
  try {
    const { login, password } = action.payload;

    const result = yield call(fetchAuthRequestFirst, login, password);

    if (result.data.success === true) {
      yield put(fetchAuthSucces(result));
    } else {
      yield put(fetchAuthFailure(result.data.error));
    }
  } catch (error) {
    put(fetchAuthFailure(error));
  }
}

export const fetchAuthRequestFirst = (login, password) => {
  const res = axios.post(
    "http://loft-taxi.glitch.me/auth",
    { email: login, password: password },
    { headers: { "Content-Type": "application/json" } }
  );
  return res;
};
