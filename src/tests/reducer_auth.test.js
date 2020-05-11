import reducer from "../providers/redux/modules/auth";
import {
  fetchAuthRequest,
  fetchAuthSucces,
  fetchAuthFailure,
  fetchRegistrationFailure,
  fetchRegistrationRequest,
  fetchRegistrationSucces,
} from "../providers/redux/modules/auth";

describe("Reducers", () => {
  describe("Check auth reducer", () => {
    it("check token isAuth error reducers", () => {
      const initialState = {
        token: null,
        isAuthorized: false,
        error: null,
      };
      expect(
        reducer(
          initialState,
          fetchAuthRequest({ login: "login", password: "password" })
        )
      ).toEqual({
        token: null,
        isAuthorized: false,
        error: null,
      });
    });

    it("check token isAuth error reducers", () => {
      const initialState = {
        token: null,
        isAuthorized: false,
        error: null,
      };
      expect(
        reducer(initialState, fetchAuthSucces({ data: { token: "token" } }))
      ).toEqual({
        token: "token",
        isAuthorized: true,
        error: null,
      });
    });

    it("check token isAuth error reducers", () => {
      const initialState = {
        token: null,
        isAuthorized: false,
        error: null,
      };
      expect(reducer(initialState, fetchAuthFailure("error"))).toEqual({
        token: null,
        isAuthorized: false,
        error: "error",
      });
    });

    it("check token isAuth error reducers for registration", () => {
      const initialState = {
        token: null,
        isAuthorized: false,
        error: null,
      };
      expect(
        reducer(
          initialState,
          fetchRegistrationRequest({
            login: "login",
            password: "password",
            name: "name",
            surname: "surname",
          })
        )
      ).toEqual({
        token: null,
        isAuthorized: false,
        error: null,
      });
    });

    it("check token isAuth error reducer regostration", () => {
      const initialState = {
        token: null,
        isAuthorized: false,
        error: null,
      };
      expect(
        reducer(
          initialState,
          fetchRegistrationSucces({ data: { token: "token" } })
        )
      ).toEqual({
        token: "token",
        isAuthorized: true,
        error: null,
      });
    });

    it("check token isAuth error reducer registration", () => {
      const initialState = {
        token: null,
        isAuthorized: false,
        error: null,
      };
      expect(reducer(initialState, fetchRegistrationFailure("error"))).toEqual({
        token: null,
        isAuthorized: false,
        error: "error",
      });
    });
  });
});
