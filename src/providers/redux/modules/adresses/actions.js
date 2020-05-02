import { createAction } from "redux-actions";

export const fetchForListOfAdresses = createAction("GET_LIST_OF_ADRESSES");
export const fetchForListOfAdressesSuccess = createAction(
  "GET_LIST_OF_ADRESSES_SUCCESS"
);
export const fetchForListOfAdressesFail = createAction(
  "GET_LIST_OF_ADRESSES_FAIL"
);
