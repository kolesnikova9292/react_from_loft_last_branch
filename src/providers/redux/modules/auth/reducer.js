import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchAuthSucces,
  fetchAuthFailure,
  logoutUser,
  fetchRegistrationFailure,
  fetchRegistrationSucces,
} from "./actions";

const token = handleActions(
  {
    [fetchAuthSucces]: (_state, action) => action.payload.data.token,
    [fetchAuthFailure]: () => null,
    [fetchRegistrationSucces]: (_state, action) => action.payload.data.token,
    [fetchRegistrationFailure]: () => null,
    [logoutUser]: () => null,
  },
  null
);

const isAuthorized = handleActions(
  {
    [fetchAuthSucces]: () => true,
    [fetchRegistrationSucces]: () => true,
    [fetchAuthFailure]: () => false,
    [fetchRegistrationFailure]: () => false,
    [logoutUser]: () => false,
  },
  false
);

const error = handleActions(
  {
    [fetchAuthFailure]: (_state, action) => action.payload.error,
    [fetchRegistrationFailure]: (_state, action) => action.payload.error,
  },
  null
);

export default combineReducers({
  token,
  isAuthorized,
  error,
});
