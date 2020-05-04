import { handleActions } from "redux-actions";
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
