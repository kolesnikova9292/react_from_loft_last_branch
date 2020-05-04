import { createAction } from "redux-actions";

export const fetchForRoute = createAction("GET_ROUTE");
export const fetchForRouteSuccess = createAction("GET_ROUTE_SUCCESS");
export const fetchForRouteFail = createAction("GET_ROUTE__FAIL");
export const fetchForRouteClean = createAction("GET_ROUTE__CLEAN");
export const fetchForRouteCleanSuccess = createAction(
  "GET_ROUTE__CLEAN_SUCCESS"
);
