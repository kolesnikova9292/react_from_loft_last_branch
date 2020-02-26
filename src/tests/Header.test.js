import React from "react";
import { Header } from "../header/Header";
import { render, fireEvent } from "@testing-library/react";
import { AuthContext } from "../providers/AuthContext";

describe("Header", () => {
  describe("rendering of header", () => {
    let onActionMock = jest.fn();
    let onActionMock1 = jest.fn();
    let onActionMock2 = jest.fn();

    it("click on map button", () => {
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Header showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );

      const node = getByText("Карта");
      fireEvent.click(node);

      expect(onActionMock).toHaveBeenCalledWith("my-map");
    });

    it("click on personal area", () => {
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Header showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );

      const node = getByText("Профиль");
      fireEvent.click(node);

      expect(onActionMock).toHaveBeenCalledWith("personal-area");
    });

    it("click on logout button", () => {
      const { getByText } = render(
        <AuthContext.Provider
          value={{
            isAuthorized: true,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Header showMapEvent={onActionMock} />
        </AuthContext.Provider>
      );

      const node = getByText("Выйти");
      fireEvent.click(node);

      expect(onActionMock).toHaveBeenCalledWith("logout");
    });
  });
});
