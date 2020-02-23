import React from "react";
import App from "../App";
import { CountProvider } from "../providers/AuthContext";
import { render } from "@testing-library/react";

describe("App", () => {
  describe("rendering of app", () => {
    it("find personal area in header", () => {
      const { getByText, container } = render(
        <CountProvider>
          <App />
        </CountProvider>
      );
      const items = getByText("Профиль");
      expect(items).not.toBeNull();
    });

    it("find map in header", () => {
      const { getByText, container } = render(
        <CountProvider>
          <App />
        </CountProvider>
      );
      const items = getByText("Карта");
      expect(items).not.toBeNull();
    });

    it("find login/logout in header", () => {
      const { getByText, container } = render(
        <CountProvider>
          <App />
        </CountProvider>
      );
      const items = getByText("Войти");
      expect(items).not.toBeNull();
    });
  });
});
