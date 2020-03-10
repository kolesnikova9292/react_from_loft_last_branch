import { getAuthRequest, getAuthSucces, getAuthFailure } from "./actions";

export const initialState = {
  token: null,
  //localStorage.getItem("token") == undefined
  // ? null
  // : localStorage.getItem("token"),
  isAuthorized: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case getAuthRequest.toString():
      console.log(4);
      console.log(state);
      return {
        ...state,
      };

    case getAuthSucces.toString():
      console.log(3);
      return {
        ...state,
        isAuthorized: true,
        token: action.payload.data.token,
      };

    case getAuthFailure.toString():
      return {
        ...state,
        isAuthorized: false,
        token: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
