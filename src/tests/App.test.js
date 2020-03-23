import React from "react";
import App from "../App";
import { renderWithRedux } from "./renderWithRedux";
import { BrowserRouter } from "react-router-dom";
import { initialStateNotAuth } from "./initialStateNotAuth";

describe("App", () => {
  describe("rendering of app", () => {
    it("find lets go! in header", () => {
      const { getAllByText } = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      expect(getAllByText("Войти")).not.toBeNull();
    });

    it("find login field in header", () => {
      const { getAllByText } = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      expect(getAllByText("Логин")).not.toBeNull();
    });

    it("find password field in header", () => {
      const { getAllByText } = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      expect(getAllByText("Пароль")).not.toBeNull();
    });
  });
});

/*describe("App", () => {
  describe("rendering of app", () => {
    let onActionMock = jest.fn();
    let onActionMock1 = jest.fn();
    let onActionMock2 = jest.fn();
    it("find personal area in header", () => {
      const { getAllByText, container } = render(
        <AuthProvider>
          <App />
        </AuthProvider>
      );
      const items = getAllByText("Войти");
      expect(items).not.toBeNull();
    });

    it("find personal area in header", () => {
      const { getAllByText, container } = render(
        <AuthProvider>
          <App />
        </AuthProvider>
      );
      const items = getAllByText("Логин");
      expect(items).not.toBeNull();
    });

    it("find personal area in header", () => {
      const { getAllByText, container } = render(
        <AuthProvider>
          <App />
        </AuthProvider>
      );
      const items = getAllByText("Пароль");
      expect(items).not.toBeNull();
    });
  });
});*/
