import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
  fetchRegistrateMyBankCardSuccess,
  fetchRegistrateMyBankCardFail,
} from "./actions";

const number = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.cardNumber,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) =>
      action.payload.cardNumber,
    [fetchRegistrateMyBankCardFail]: () => null,
  },
  null
);

const validity = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.expiryDate,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) =>
      action.payload.expiryDate,
    [fetchRegistrateMyBankCardFail]: () => null,
  },
  null
);

const owner = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.cardName,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) =>
      action.payload.cardName,
    [fetchRegistrateMyBankCardFail]: () => null,
  },
  null
);

const cvc = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.cvc,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) => action.payload.cvc,
    [fetchRegistrateMyBankCardFail]: () => null,
  },
  null
);

export default combineReducers({
  number,
  validity,
  owner,
  cvc,
});
