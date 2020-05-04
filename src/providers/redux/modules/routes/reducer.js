import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchForRouteSuccess,
  fetchForRouteFail,
  fetchForRouteCleanSuccess,
} from "./actions";

const route = handleActions(
  {
    [fetchForRouteSuccess]: (_state, action) => action.payload.data,
    [fetchForRouteFail]: () => null,
    [fetchForRouteCleanSuccess]: () => null,
  },
  null
);

export default route;
//export default combineReducers({
//  adresses,
//});
