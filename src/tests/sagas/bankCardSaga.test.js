import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import {
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
  fetchBankCardInformation,
} from "../../providers/redux/modules/bankCard/actions";
import { generatorForPaymentSagaGetInformation } from "../../providers/redux/modules/bankCard/paymentSaga";
import { fetchBankCardInformationGetInfoAxios } from "../../providers/redux/modules/bankCard/paymentSaga";

describe("set of tests for bank card", () => {
  const iterator = cloneableGenerator(generatorForPaymentSagaGetInformation)(
    fetchBankCardInformation("AUTH_TOKEN")
  );

  it("get information about bank card", () => {
    const value = iterator.next("AUTH_TOKEN").value;

    expect(value).toEqual(
      call(fetchBankCardInformationGetInfoAxios, "AUTH_TOKEN")
    );
  });

  it("information about bank card success", () => {
    const clone = iterator.clone();

    //console.log(clone.next({ statusText: "OK" }).value);
    expect(clone.next({ statusText: "OK" }).value).toEqual(
      put(fetchBankCardInformationSuccess({ statusText: "OK" }))
    );
  });

  it("information about bank card fail", () => {
    const clone = iterator.clone();

    expect(clone.next({ data: { error: "error" } }).value).toEqual(
      put(fetchBankCardInformationFail("error"))
    );
  });
});
