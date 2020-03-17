import handleActions from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
} from "./actions";

const number = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.number,
    [fetchBankCardInformationFail]: () => null,
  },
  null
);

const validity = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.validity,
    [fetchBankCardInformationFail]: () => null,
  },
  null
);

const owner = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.owner,
    [fetchBankCardInformationFail]: () => null,
  },
  null
);

const cvc = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.cvc,
    [fetchBankCardInformationFail]: () => null,
  },
  null
);

export default combineReducers({
  number,
  validity,
  owner,
  cvc,
});
