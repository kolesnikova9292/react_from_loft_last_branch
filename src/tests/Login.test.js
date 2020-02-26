import React from "react";
import App from "../App";
import { AuthContext } from "../providers/AuthContext";
import { Login } from "../pages/login/index";
import { render, fireEvent } from "@testing-library/react";

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
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Login showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );
      const items = getByText("Войти");
      expect(items).not.toBeNull();
      fireEvent.submit(items);
      expect(onActionMock1).toBeCalled();
    });
    it("check rendering fields", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Login showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );
      const items = getByText("Логин");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Login showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );
      const items = getByText("Пароль");
      expect(items).not.toBeNull();
    });
    it("check rendering registration button", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Login showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );
      const items = getByText("Перейти на регистрацию");
      expect(items).not.toBeNull();
      fireEvent.submit(items);
      expect(onActionMock1).toBeCalled();
    });

    it("check rendering logout context function", () => {
      let onActionMock = jest.fn();
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Login showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );
      expect(onActionMock2).toBeCalled();
    });
  });
});
