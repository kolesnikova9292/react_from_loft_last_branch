import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  getAuthSucces,
  getAuthFailure,
  logoutUser,
  getRegistrationFailure,
  getRegistrationSucces,
} from "../actions";

const token = handleActions(
  {
    [getAuthSucces]: (_state, action) => action.payload.data.token,
    [getAuthFailure]: () => null,
    [getRegistrationSucces]: (_state, action) => action.payload.data.token,
    [getRegistrationFailure]: () => null,
    [logoutUser]: () => null,
  },
  null
);

const isAuthorized = handleActions(
  {
    [getAuthSucces]: () => true,
    [getRegistrationSucces]: () => true,
    [getAuthFailure]: () => false,
    [getRegistrationFailure]: () => false,
    [logoutUser]: () => false,
  },
  false
);

const error = handleActions(
  {
    [getAuthFailure]: (_state, action) => action.payload.error,
    [getRegistrationFailure]: (_state, action) => action.payload.error,
  },
  null
);

export default combineReducers({
  token,
  isAuthorized,
  error,
});

export const getToken = state => state.auth.token;
export const getAuthFlag = state => state.auth.isAuthorized;
export const getError = state => state.auth.error;

/*export default function(state = initialState, action) {
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
}*/
