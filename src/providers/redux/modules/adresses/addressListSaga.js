import { takeEvery, call, put } from "redux-saga/effects";
import {
  fetchForListOfAdresses,
  fetchForListOfAdressesSuccess,
  fetchForListOfAdressesFail,
} from "./actions";
import axios from "axios";

export function* addressListSaga() {
  console.log(5555);
  yield takeEvery(fetchForListOfAdresses, generatorForAdressList);
}

export function* generatorForAdressList() {
  console.log(666);
  try {
    const result = yield call(fetchAdressListAxios);
    console.log(result);
    if (result.status === 200) {
      console.log(200);
      yield put(fetchForListOfAdressesSuccess(result));
    } else {
      yield put(fetchForListOfAdressesFail());
    }
  } catch (error) {
    //put(fetchAuthFailure(error));
  }
}

export const fetchAdressListAxios = async () => {
  return await axios.get("https://loft-taxi.glitch.me/addressList");
};
