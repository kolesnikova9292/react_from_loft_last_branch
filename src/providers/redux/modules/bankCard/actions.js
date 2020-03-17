import { createAction } from "redux-actions";

export const fetchBankCardInformation = createAction("GET_BANK_CARD_DATA");
export const fetchBankCardInformationSuccess = createAction(
  "GET_BANK_CARD_DATA_SUCCESS"
);
export const fetchBankCardInformationFail = createAction(
  "GET_BANK_CARD_DATA_FAIL"
);
export const fetchRegistrateMyBankCard = createAction("REGISTRATE_BANK_CARD");
export const fetchRegistrateMyBankCardSuccess = createAction(
  "REGISTRATE_BANK_CARD_SUCCESS"
);
export const fetchRegistrateMyBankCardFail = createAction(
  "REGISTRATE_BANK_CARD_FAIL"
);
