import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import {
  fetchForListOfAdresses,
  fetchForListOfAdressesFail,
  fetchForListOfAdressesSuccess,
} from "../../providers/redux/modules/adresses/actions";
import { generatorForAdressList } from "../../providers/redux/modules/adresses/addressListSaga";
import { fetchAdressListAxios } from "../../providers/redux/modules/adresses/addressListSaga";

describe("set of tests for adress list", () => {
  const iterator = cloneableGenerator(generatorForAdressList)(
    fetchAdressListAxios()
  );

  it("get information about adresses", () => {
    const value = iterator.next().value;

    expect(value).toEqual(call(fetchAdressListAxios));
  });

  it("adress list run success", () => {
    const clone = iterator.clone();
    expect(clone.next({ status: 200 }).value).toEqual(
      put(fetchForListOfAdressesSuccess({ status: 200 }))
    );
  });

  it("adress list run fail", () => {
    const clone = iterator.clone();

    expect(clone.next({ status: 404 }).value).toEqual(
      put(fetchForListOfAdressesFail())
    );
  });
});
