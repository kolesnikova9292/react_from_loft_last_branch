import React from "react";
import App from "../App";
import { Login } from "../pages/login/index";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";

describe("Login", () => {
  describe("rendering of login", () => {
    it("check rendering", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Login />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );

      const items = getByText("Войти");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Login />
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
          <Login />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Пароль");
      expect(items).not.toBeNull();
    });
    it("check rendering registration button", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Login />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Перейти на регистрацию");
      expect(items).not.toBeNull();
    });

    it("check rendering logout context function", () => {
      localStorage.setItem("accessToken", "answer.token");
      window.confirm = jest.fn();
      renderWithRedux(
        <BrowserRouter>
          <Login goAway={true} />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      expect(window.confirm).toBeCalled();
    });
  });
});
