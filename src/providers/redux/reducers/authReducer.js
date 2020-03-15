import { initialState } from "../store";
import {
  getAuthRequest,
  getAuthSucces,
  getAuthFailure,
  logoutUser,
  getRegistrationRequest,
  getRegistrationFailure,
  getRegistrationSucces,
} from "../actions";

export default function(state = initialState, action) {
  switch (action.type) {
    case getAuthRequest.toString():
    case getRegistrationRequest.toString():
      return {
        ...state,
      };

    case getAuthSucces.toString():
    case getRegistrationSucces.toString():
      return {
        ...state,
        isAuthorized: true,
        token: action.payload.data.token,
      };

    case getAuthFailure.toString():
    case getRegistrationFailure.toString():
      return {
        ...state,
        isAuthorized: false,
        token: null,
        error: action.payload.error,
      };

    case logoutUser.toString():
      return {
        ...state,
        isAuthorized: false,
        token: null,
      };

    default:
      return state;
  }
}
