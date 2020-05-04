import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import {
  fetchForRouteCleanSuccess,
  fetchForRouteClean,
  fetchForRoute,
  fetchForRouteFail,
  fetchForRouteSuccess,
} from "../../providers/redux/modules/routes/actions";
import { generatorForRoute } from "../../providers/redux/modules/routes/routeSaga";
import { generatorForCleanRoute } from "../../providers/redux/modules/routes/routeSaga";
import { fetchForRouteAxios } from "../../providers/redux/modules/routes/routeSaga";

describe("set of tests for getting route", () => {
  const iterator = cloneableGenerator(generatorForRoute)(
    fetchForRoute({ first_point: "point1", second_point: "point2" })
  );

  it("get information about route", () => {
    const value = iterator.next().value;

    expect(value).toEqual(call(fetchForRouteAxios, "point1", "point2"));
  });

  it("getting route success", () => {
    const clone = iterator.clone();
    expect(clone.next({ status: 200 }).value).toEqual(
      put(fetchForRouteSuccess({ status: 200 }))
    );
  });

  it("getting route fail", () => {
    const clone = iterator.clone();

    expect(clone.next({ status: 404 }).value).toEqual(put(fetchForRouteFail()));
  });

  const iterator2 = cloneableGenerator(generatorForCleanRoute)(
    fetchForRouteClean()
  );

  it("clean route success", () => {
    const clone = iterator2.clone();
    expect(clone.next().value).toEqual(put(fetchForRouteCleanSuccess()));
  });
});
