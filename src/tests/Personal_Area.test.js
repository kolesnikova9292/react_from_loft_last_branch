import React from "react";
import { PersonalArea } from "../pages/personal_area/index";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";
import axiosMock from "axios";

jest.mock("axios");

describe("PersonalArea", () => {
  describe("rendering of personal area", () => {
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
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <PersonalArea history={historyMock} />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      const items = getByText("СОХРАНИТЬ");
      expect(items).not.toBeNull();
      fireEvent.submit(items);
      expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
  });
});
