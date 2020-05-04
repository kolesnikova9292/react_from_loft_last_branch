import { takeEvery, call, put } from "redux-saga/effects";
import {
  fetchForListOfAdresses,
  fetchForListOfAdressesSuccess,
  fetchForListOfAdressesFail,
} from "./actions";
import axios from "axios";

export function* addressListSaga() {
  yield takeEvery(fetchForListOfAdresses, generatorForAdressList);
}

export function* generatorForAdressList() {
  try {
    const result = yield call(fetchAdressListAxios);
    if (result.status === 200) {
      yield put(fetchForListOfAdressesSuccess(result));
    } else {
      yield put(fetchForListOfAdressesFail());
    }
  } catch (error) {
    put(fetchForListOfAdressesFail());
  }
}

export const fetchAdressListAxios = async () => {
  return await axios.get("https://loft-taxi.glitch.me/addressList");
};
