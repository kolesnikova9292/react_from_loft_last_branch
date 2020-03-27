import React from "react";
import { Registration } from "../pages/registration/index";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";
import axiosMock from "axios";

jest.mock("axios");

describe("Registration", () => {
  describe("rendering of registration", () => {
    it("check rendering", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );

      const items = getByText("Регистрация");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Логин");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Пароль");
      expect(items).not.toBeNull();
    });

    it("check rendering fields", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Фамилия");
      expect(items).not.toBeNull();
    });

    it("check step to server", async () => {
      jest.mock("axios");
      const historyMock = { push: jest.fn() };
      axiosMock.post.mockResolvedValueOnce({
        data: {
          email: "login",
          password: "password",
          name: "firstname",
          surname: "lastname",
        },
      });
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration history={historyMock} />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Регистрация");
      expect(items).not.toBeNull();
      fireEvent.submit(items);
      expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });
  });
});
