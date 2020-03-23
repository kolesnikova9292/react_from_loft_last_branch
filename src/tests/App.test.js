import React from "react";
import App from "../App";
import { renderWithRedux } from "./renderWithRedux";
import { BrowserRouter } from "react-router-dom";
import { getByTestId } from "@testing-library/dom";

describe("App", () => {
  describe("rendering of app", () => {
    let onActionMock = jest.fn();
    let onActionMock1 = jest.fn();
    let onActionMock2 = jest.fn();
    const initialStateNotAuth = {
      auth: {
        token: null,
        isAuthorized: false,
        error: null,
      },
      bankCard: {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      },
    };

    const initialStateAuth = {
      auth: {
        token: "token",
        isAuthorized: true,
        error: null,
      },
      bankCard: {
        number: null,
        validity: null,
        owner: null,
        cvc: null,
      },
    };
    it("find lets go! in header", () => {
      const mainComponent = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      console.log(mainComponent.store.getState());
      const items = mainComponent.getAllByText("Войти");
      expect(items).not.toBeNull();
    });

    it("find login field in header", () => {
      const mainComponent = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      console.log(mainComponent.store.getState());
      const items = mainComponent.getAllByText("Логин");
      expect(items).not.toBeNull();
    });

    it("find password field in header", () => {
      const mainComponent = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      console.log(mainComponent.store.getState());
      const items = mainComponent.getAllByText("Пароль");
      expect(items).not.toBeNull();
    });

    it("not find personal area in header", () => {
      const { queryByTestId } = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      //console.log(mainComponent.store.getState());
      //const items = mainComponent.getAllByTestId("personal-area");
      expect(queryByTestId("personal-area")).toBeNull();
    });

    it("find personal area in header", () => {
      const mainComponent = renderWithRedux(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        {
          initialState: initialStateAuth,
        }
      );
      console.log(mainComponent.store.getState());
      const items = mainComponent.getAllByTestId("personal-area");
      expect(items).not.toBeNull();
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
