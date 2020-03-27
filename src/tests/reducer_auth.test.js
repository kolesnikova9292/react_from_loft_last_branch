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
  describe("CheckReducers", () => {
    let action;

    it("CheckReducers First Test User Loading", () => {
      //token({}, fetchAuthRequest({ "login", "password" }));
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

    /*  it("CheckReducers First Test User Already Loaded", () => {
      action = {
        type: USER_LOADED,
      };

      expect(authReducer(initialState, action)).toEqual({
        token: null,
        isAuthenticated: true,
        isLoading: false,
      });
    });

    it("CheckReducers First Test User Login With Success", () => {
      action = {
        type: LOGIN_SUCCESS,
        payload: {
          token: null,
        },
      };

      expect(authReducer(initialState, action)).toEqual({
        token: null,
        isAuthenticated: true,
        isLoading: false,
      });
    });

    it("CheckReducers First Test User Login With Faylier", () => {
      action = {
        type: REGISTER_FAIL,
        payload: {
          token: null,
        },
      };

      expect(authReducer(initialState, action)).toEqual({
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    });*/
  });
});
