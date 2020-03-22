import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  fetchBankCardInformationFail,
  fetchBankCardInformationSuccess,
  fetchRegistrateMyBankCardFail,
  fetchRegistrateMyBankCardSuccess,
} from "./actions";

const number = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.number,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) =>
      action.payload.data.number,
    [fetchRegistrateMyBankCardFail]: () => null,
  },
  null
);

const validity = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.validity,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) =>
      action.payload.data.validity,
    [fetchRegistrateMyBankCardFail]: () => null,
  },
  null
);

const owner = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.owner,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) =>
      action.payload.data.owner,
    [fetchRegistrateMyBankCardFail]: () => null,
  },
  null
);

const cvc = handleActions(
  {
    [fetchBankCardInformationSuccess]: (_state, action) =>
      action.payload.data.cvc,
    [fetchBankCardInformationFail]: () => null,
    [fetchRegistrateMyBankCardSuccess]: (_state, action) =>
      action.payload.data.cvc,
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
