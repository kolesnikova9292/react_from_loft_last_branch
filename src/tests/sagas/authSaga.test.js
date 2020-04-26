import { cloneableGenerator } from "@redux-saga/testing-utils";
import { authGeneratorFunction } from "../../providers/redux/modules/auth/authorizationSaga ";
import { fetchAuthRequestFirst } from "../../providers/redux/modules/auth/authorizationSaga ";
import { put, call } from "redux-saga/effects";
import {
  fetchAuthRequest,
  fetchAuthSucces,
  fetchAuthFailure,
} from "../../providers/redux/modules/auth";

describe("loginCurrentUser", () => {
  const iterator = cloneableGenerator(authGeneratorFunction)(
    fetchAuthRequest({ login: "email@test.com", password: "password" })
  );

  it("auth request", () => {
    const value = iterator.next("email@test.com", "password").value;

    const email = "email@test.com";
    const password = "password";

    expect(value).toEqual(call(fetchAuthRequestFirst, email, password));
  });

  it("auth success", () => {
    const clone = iterator.clone();

    expect(clone.next({ data: { success: true } }).value).toEqual(
      put(fetchAuthSucces({ data: { success: true } }))
    );
  });

  it("auth failed", () => {
    const clone = iterator.clone();

    expect(clone.next({ data: { success: false } }).value).toEqual(
      put(fetchAuthFailure())
    );
  });
});
