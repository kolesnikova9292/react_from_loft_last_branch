import React from "react";
import App from "../App";
import { AuthContext } from "../providers/AuthContext";
import { Login } from "../pages/login/index";
import { render } from "@testing-library/react";

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
      const items = getByText("Перейти на регистрацию");
      expect(items).not.toBeNull();
    });
  });
});
