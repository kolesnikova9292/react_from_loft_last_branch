import React from "react";
import App from "../App";
import { AuthContext, AuthProvider } from "../providers/AuthContext";
import { render } from "@testing-library/react";

describe("App", () => {
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
});
