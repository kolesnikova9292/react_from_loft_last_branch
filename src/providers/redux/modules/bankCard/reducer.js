import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
} from "./actions";

const number = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.cardNumber,
    [fetchBankCardInformationFail]: () => null,
  },
  null
);

const validity = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.expiryDate,
    [fetchBankCardInformationFail]: () => null,
  },
  null
);

const owner = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.cardName,
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
