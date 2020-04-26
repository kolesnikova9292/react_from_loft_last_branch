import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import {
  fetchRegistrationRequest,
  fetchRegistrationFailure,
  fetchRegistrationSucces,
} from "../../providers/redux/modules/auth/actions";
import { registratinGenerator } from "../../providers/redux/modules/auth/registrationSaga";
import { fetchRegistrationRequestFirst } from "../../providers/redux/modules/auth/registrationSaga";

describe("registrate Current User", () => {
  const iterator = cloneableGenerator(registratinGenerator)(
    fetchRegistrationRequest({
      email: "email@test.com",
      password: "password",
      name: "Name",
      surname: "Surname",
    })
  );

  it("registrate request", () => {
    const value = iterator.next("email@test.com", "password", "Name", "Surname")
      .value;

    const email = "email@test.com";
    const password = "password";
    const name = "Name";
    const surname = "Surname";

    expect(value).toEqual(
      call(fetchRegistrationRequestFirst, email, password, name, surname)
    );
  });

  it("registrate success", () => {
    const clone = iterator.clone();

    expect(clone.next({ data: { success: true } }).value).toEqual(
      put(fetchRegistrationSucces({ data: { success: true } }))
    );
  });

  it("register failed", () => {
    const clone = iterator.clone();

    expect(clone.next({ data: { success: false } }).value).toEqual(
      put(fetchRegistrationFailure())
    );
  });
});
