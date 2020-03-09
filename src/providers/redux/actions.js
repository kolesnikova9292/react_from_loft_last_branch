import { createAction } from "redux-actions";

export const getAuthRequest = createAction("GET_AUTH_REQUEST");
export const getAuthSucces = createAction("GET_AUTH_SUCCESS");
export const getAuthFailure = createAction("GET_AUTH_FAILURE");

export const getRegistrationRequest = createAction("GET_REGISTRATION_REQUEST");
export const getRegistrationSucces = createAction("GET_REGISTRATION_SUCCESS");
export const getRegistrationFailure = createAction("GET_REGISTRATION_FAILURE");
