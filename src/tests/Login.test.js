import React from "react";
import App from "../App";
import { AuthContext } from "../providers/AuthContext";
import { Login } from "../pages/login/index";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
  describe("rendering of login", () => {
    let onActionMock = jest.fn();
    let onActionMock1 = jest.fn();
    let onActionMock2 = jest.fn();
    it("check rendering", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: false,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Login />
        </AuthContext.Provider>
      );
      const items = getByText("Войти");
      expect(items).not.toBeNull();
      //fireEvent.submit(items);
      //expect(onActionMock1).toBeCalled();
    });
    it("check rendering fields", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: false,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Login />
          </AuthContext.Provider>
        </BrowserRouter>
      );
      const items = getByText("Логин");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: false,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Login />
          </AuthContext.Provider>
        </BrowserRouter>
      );
      const items = getByText("Пароль");
      expect(items).not.toBeNull();
    });
    it("check rendering registration button", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: false,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Login />
          </AuthContext.Provider>
        </BrowserRouter>
      );
      const items = getByText("Перейти на регистрацию");
      expect(items).not.toBeNull();
      //fireEvent.submit(items);
      //expect(onActionMock1).toBeCalled();
    });

    it("check rendering logout context function", () => {
      localStorage.setItem("accessToken", "answer.token");
      window.confirm = jest.fn();
      let onActionMock = jest.fn();
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: true,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Login />
          </AuthContext.Provider>
        </BrowserRouter>
      );
      expect(window.confirm).toBeCalled();
      //const items = getByText("Вы уверены, что хотите выйти");
      //expect(items).not.toBeNull();
      //expect(onActionMock2).toBeCalled();
    });
  });
});
