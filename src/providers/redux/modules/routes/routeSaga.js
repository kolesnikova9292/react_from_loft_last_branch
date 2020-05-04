import { takeEvery, call, put } from "redux-saga/effects";
import {
  fetchForRoute,
  fetchForRouteSuccess,
  fetchForRouteFail,
  fetchForRouteClean,
  fetchForRouteCleanSuccess,
} from "./actions";
import axios from "axios";

export function* routeSaga() {
  yield takeEvery(fetchForRoute, generatorForRoute);
  yield takeEvery(fetchForRouteClean, generatorForCleanRoute);
}

export function* generatorForRoute(action) {
  try {
    const result = yield call(
      fetchForRouteAxios,
      action.payload.first_point,
      action.payload.second_point
    );
    if (result.status === 200) {
      yield put(fetchForRouteSuccess(result));
    } else {
      yield put(fetchForRouteFail());
    }
  } catch (error) {
    put(fetchForRouteFail());
  }
}

export function* generatorForCleanRoute() {
  try {
    yield put(fetchForRouteCleanSuccess());
  } catch (error) {
    put(fetchForRouteFail(error));
  }
}

export const fetchForRouteAxios = async (point1, point2) => {
  return await axios.get(
    `https://loft-taxi.glitch.me/route?address1=${point1}&address2=${point2}`
  );
};
