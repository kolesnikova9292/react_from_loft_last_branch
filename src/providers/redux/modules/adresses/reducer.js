import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchForListOfAdressesSuccess,
  fetchForListOfAdressesFail,
} from "./actions";

const adresses = handleActions(
  {
    [fetchForListOfAdressesSuccess]: (_state, action) =>
      action.payload.data.addresses,
    [fetchForListOfAdressesFail]: () => null,
  },
  null
);

export default adresses;
//export default combineReducers({
//  adresses,
//});
