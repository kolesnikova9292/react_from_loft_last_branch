import { takeEvery, call, put } from "redux-saga/effects";
import { fetchAuthRequest, fetchAuthSucces, fetchAuthFailure } from "./actions";
import axios from "axios";

export function* authorizationSaga() {
  yield takeEvery(fetchAuthRequest, function*(action) {
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
  });
}

const fetchAuthRequestFirst = (login, password) => {
  const res = axios.post(
    "http://loft-taxi.glitch.me/auth",
    { email: login, password: password },
    { headers: { "Content-Type": "application/json" } }
  );
  //.then(res => res);
  // .then(response => {
  //   return response;
  //  });
  return res;
  // .then(data => {
  //   if (data.data.success === true) store.dispatch(fetchAuthSucces(data));
  //    else store.dispatch(fetchAuthFailure(data.data.error));
  //  })
  // .catch(error => store.dispatch(fetchAuthFailure(error)));
};
