import reducer from "../providers/redux/modules/bankCard";
import {
  fetchBankCardInformation,
  fetchBankCardInformationSuccess,
  fetchBankCardInformationFail,
  fetchRegistrateMyBankCard,
  fetchRegistrateMyBankCardFail,
  fetchRegistrateMyBankCardSuccess,
} from "../providers/redux/modules/bankCard";

describe("Reducers", () => {
  describe("Check auth reducer", () => {
    it("check token isAuth error reducers", () => {
      const initialState = {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      };
      expect(reducer(initialState, fetchBankCardInformation("token"))).toEqual({
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      });
    });

    it("check token isAuth error reducers", () => {
      const initialState = {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      };
      expect(
        reducer(
          initialState,
          fetchBankCardInformationSuccess({
            data: {
              cardNumber: "cardNumber",
              expiryDate: "expiryDate",
              cardName: "cardName",
              cvc: "cvc",
            },
          })
        )
      ).toEqual({
        number: "cardNumber",
        validity: "expiryDate",
        owner: "cardName",
        cvc: "cvc",
      });
    });

    it("check token isAuth error reducers", () => {
      const initialState = {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      };
      expect(
        reducer(initialState, fetchBankCardInformationFail({ error: "error" }))
      ).toEqual({
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      });
    });

    it("check token isAuth error reducers for registration", () => {
      const initialState = {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      };
      expect(
        reducer(
          initialState,
          fetchRegistrateMyBankCard({
            login: "login",
            password: "password",
            name: "name",
            surname: "surname",
          })
        )
      ).toEqual({
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      });
    });

    it("check token isAuth error reducer regostration", () => {
      const initialState = {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      };
      expect(
        reducer(
          initialState,
          fetchRegistrateMyBankCardSuccess({
            data: {
              cardNumber: "cardNumber",
              expiryDate: "expiryDate",
              cardName: "cardName",
              cvc: "cvc",
            },
          })
        )
      ).toEqual({
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      });
    });

    it("check token isAuth error reducer registration", () => {
      const initialState = {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      };
      expect(
        reducer(initialState, fetchRegistrateMyBankCardFail("error"))
      ).toEqual({
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      });
    });
  });
});
