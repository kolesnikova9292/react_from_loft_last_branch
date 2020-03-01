import React from "react";
import { Header } from "../header/Header";
import { render, fireEvent } from "@testing-library/react";
import { AuthContext } from "../providers/AuthContext";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  describe("rendering of header", () => {
    let onActionMock = jest.fn();
    let onActionMock1 = jest.fn();
    let onActionMock2 = jest.fn();

    it("click on map button", () => {
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: true,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Header />
          </AuthContext.Provider>
        </BrowserRouter>
      );

      const node = getByText("Карта");
      expect(node).not.toBeNull();
      //fireEvent.click(node);

      //expect(onActionMock).toHaveBeenCalledWith("my-map");
    });

    it("click on personal area", () => {
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: true,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Header showMapEvent={onActionMock} />
          </AuthContext.Provider>
        </BrowserRouter>
      );

      const node = getByText("Профиль");
      expect(node).not.toBeNull();
      //fireEvent.click(node);

      //expect(onActionMock).toHaveBeenCalledWith("personal-area");
    });

    it("click on logout button", () => {
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: true,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Header showMapEvent={onActionMock} />
          </AuthContext.Provider>
        </BrowserRouter>
      );

      const node = getByText("Выйти");
      expect(node).not.toBeNull();
      //fireEvent.click(node);
      //expect(onActionMock).toHaveBeenCalledWith("logout");
    });
    it("click on logout button", () => {
      const { getByText } = render(
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              isAuthorized: false,
              loginContext: onActionMock1,
              logout: onActionMock2,
            }}
          >
            <Header showMapEvent={onActionMock} />
          </AuthContext.Provider>
        </BrowserRouter>
      );

      const node = getByText("Войти");
      expect(node).not.toBeNull();
      //fireEvent.click(node);
      //expect(onActionMock).toHaveBeenCalledWith("logout");
    });
  });
});
