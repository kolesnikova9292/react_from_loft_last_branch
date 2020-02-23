import React from "react";
import { Header } from "../header/Header";
import { Login } from "../pages/login";
import { CountStateContext, CountProvider } from "../providers/AuthContext";
import { render, fireEvent } from "@testing-library/react";
import { testHook, cleanup } from "@testing-library/react";

describe("Header", () => {
  describe("rendering of header", () => {
    let onActionMock1 = jest.fn();
    let onActionMock2 = jest.fn();
    let onActionMock3 = jest.fn();
    it("find personal area in header", () => {
      const { getByText, container } = render(
        <CountStateContext.Provider
          value={{
            isAuthorized: false,
            loginContext: onActionMock1,
            logout: onActionMock2,
          }}
        >
          <Login showMapEvent={onActionMock3} />
        </CountStateContext.Provider>
      );

      const loginbutton = getByText("Войти");

      expect(loginbutton).not.toBeNull();
      fireEvent.click(loginbutton);
      expect(onActionMock1).toBeCalled();
    });
  });
});
