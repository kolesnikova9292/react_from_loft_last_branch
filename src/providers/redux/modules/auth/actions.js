import { createAction } from "redux-actions";

export const fetchAuthRequest = createAction("GET_AUTH_REQUEST");
export const fetchAuthSucces = createAction("GET_AUTH_SUCCESS");
export const fetchAuthFailure = createAction("GET_AUTH_FAILURE");
export const logoutUser = createAction("LOGOUT_USER");

export const fetchRegistrationRequest = createAction(
  "GET_REGISTRATION_REQUEST"
);
export const fetchRegistrationSucces = createAction("GET_REGISTRATION_SUCCESS");
export const fetchRegistrationFailure = createAction(
  "GET_REGISTRATION_FAILURE"
);
