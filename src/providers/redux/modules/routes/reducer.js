import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchForRouteSuccess,
  fetchForRouteFail,
  fetchForRouteCleanSuccess,
} from "./actions";
import { logoutUser } from "../auth/actions";

const route = handleActions(
  {
    [fetchForRouteSuccess]: (_state, action) => action.payload.data,
    [fetchForRouteFail]: () => null,
    [fetchForRouteCleanSuccess]: () => null,
    [logoutUser]: () => null,
  },
  null
);

export default route;
//export default combineReducers({
//  adresses,
//});
