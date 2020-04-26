import { takeEvery, call, put, fork } from "redux-saga/effects";
import {
  fetchRegistrationRequest,
  fetchRegistrationFailure,
  fetchRegistrationSucces,
} from "./actions";
import axios from "axios";

export function* registrationSaga() {
  yield takeEvery(fetchRegistrationRequest, function*(action) {
    try {
      const { email, password, name, surname } = action.payload;

      const result = yield call(
        fetchRegistrationRequestFirst,
        email,
        password,
        name,
        surname
      );

      if (result.data.success === true) {
        yield put(fetchRegistrationSucces(result));
      } else {
        yield put(fetchRegistrationFailure(result.data.error));
      }
    } catch (error) {
      put(fetchRegistrationFailure(error));
    }
  });
}

const fetchRegistrationRequestFirst = (email, password, name, surname) => {
  const res = axios.post(
    "http://loft-taxi.glitch.me/register",
    { email: email, password: password, name: name, surname: surname },
    { headers: { "Content-Type": "application/json" } }
  );
  return res;
};
