import { getAuthRequest, getAuthSucces, getAuthFailure } from "./actions";

export const initialState = {
  token:
    localStorage.getItem("token") == undefined
      ? null
      : localStorage.getItem("token"),
  isAuthorized: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case getAuthRequest.toString():
      localStorage.removeItem("token");
      return {
        ...state,
        // isAuthorized: false,
      };

    case getAuthSucces.toString():
      //localStorage.setItem("token", action.payload.token);
      console.log(11111111111111111);
      console.log(action.payload);
      return {
        ...state,
        //...action.payload,
        isAuthorized: true,
        token: action.payload.data.token,
      };

    case getAuthFailure.toString():
      localStorage.removeItem("token");
      return {
        ...state,
        //...action.payload,
        isAuthorized: false,
        token: null,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
