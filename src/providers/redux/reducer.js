import {
  getAuthRequest,
  getAuthSucces,
  getAuthFailure,
  logoutUser,
} from "./actions";

export const initialState = {
  token:
    localStorage.getItem("accessToken") == undefined
      ? null
      : localStorage.getItem("accessToken"),
  isAuthorized: localStorage.getItem("accessToken") == undefined ? false : true,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case getAuthRequest.toString():
      return {
        ...state,
      };

    case getAuthSucces.toString():
      return {
        ...state,
        isAuthorized: true,
        token: action.payload.data.token,
      };

    case getAuthFailure.toString():
      console.log(88888888888888);
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
