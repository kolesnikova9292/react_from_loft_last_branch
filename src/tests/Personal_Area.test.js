import React from "react";
import { PersonalArea } from "../pages/personal_area/index";
import { fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";
import axiosMock from "axios";

jest.mock("axios");

describe("PersonalArea", () => {
  describe("rendering of personal area", () => {
    beforeEach(() => {
      require("mutationobserver-shim");
    });
    it("check rendering", () => {
      jest.mock("axios");
      const historyMock = { push: jest.fn() };
      axiosMock.post.mockResolvedValueOnce({
        data: {
          cardNumber: "cardNumber",
          validity: "validity",
          owner: "owner",
          cvc: "cvc",
        },
      });

      axiosMock.get.mockResolvedValueOnce({
        data: {
          token: "token",
        },
      });

      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <PersonalArea />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );

      const items = getByText("Номер карты");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      jest.mock("axios");
      const historyMock = { push: jest.fn() };
      axiosMock.post.mockResolvedValueOnce({
        data: {
          cardNumber: "cardNumber",
          validity: "validity",
          owner: "owner",
          cvc: "cvc",
        },
      });

      axiosMock.get.mockResolvedValueOnce({
        data: {
          token: "token",
        },
      });
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <PersonalArea />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      const items = getByText("Срок действия");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      jest.mock("axios");
      const historyMock = { push: jest.fn() };
      axiosMock.post.mockResolvedValueOnce({
        data: {
          cardNumber: "cardNumber",
          validity: "validity",
          owner: "owner",
          cvc: "cvc",
        },
      });

      axiosMock.get.mockResolvedValueOnce({
        data: {
          token: "token",
        },
      });
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <PersonalArea />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      const items = getByText("Имя владельца");
      expect(items).not.toBeNull();
    });

    it("check rendering fields", () => {
      jest.mock("axios");
      const historyMock = { push: jest.fn() };
      axiosMock.post.mockResolvedValueOnce({
        data: {
          cardNumber: "cardNumber",
          validity: "validity",
          owner: "owner",
          cvc: "cvc",
        },
      });

      axiosMock.get.mockResolvedValueOnce({
        data: {
          token: "token",
        },
      });
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <PersonalArea />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      const items = getByText("CVC");
      expect(items).not.toBeNull();
    });

    it("check step to server", async () => {
      jest.mock("axios");
      const historyMock = { push: jest.fn() };
      axiosMock.post.mockResolvedValueOnce({
        data: {
          cardNumber: "cardNumber",
          validity: "validity",
          owner: "owner",
          cvc: "cvc",
        },
      });

      axiosMock.get.mockResolvedValueOnce({
        data: {
          token: "token",
        },
      });
      const { getByText, getByTestId } = renderWithRedux(
        <BrowserRouter>
          <PersonalArea history={historyMock} />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );

      const cardNumberInput = getByTestId(
        "test_cardNumber_field"
      ).querySelector("input");
      await act(async () => {
        await fireEvent.change(cardNumberInput, {
          target: { value: "123456" },
        });
      });
      expect(cardNumberInput.value).toBe("123456");

      const validityInput = getByTestId("test_validity_field").querySelector(
        "input"
      );
      await act(async () => {
        await fireEvent.change(validityInput, {
          target: { value: "10/20" },
        });
      });
      expect(validityInput.value).toBe("10/20");

      const ownerInput = getByTestId("test_owner_field").querySelector("input");
      await act(async () => {
        await fireEvent.change(ownerInput, {
          target: { value: "qqqwww" },
        });
      });
      expect(ownerInput.value).toBe("qqqwww");

      const cvcInput = getByTestId("test_cvc_field").querySelector("input");
      await act(async () => {
        await fireEvent.change(cvcInput, {
          target: { value: "787" },
        });
      });
      expect(cvcInput.value).toBe("787");

      const items = getByText("СОХРАНИТЬ");
      expect(items).not.toBeNull();

      await act(async () => {
        fireEvent.submit(items);
      });
      expect(axiosMock.post).toHaveBeenCalledTimes(1);
      //fireEvent.submit(items);
      //expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
  });
});
