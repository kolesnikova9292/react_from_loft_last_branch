import React from "react";
import Header from "../header/Header";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";
import App from "../App";

describe("Header", () => {
  describe("rendering of header", () => {
    let onActionMock = jest.fn();
    let onActionMock1 = jest.fn();
    let onActionMock2 = jest.fn();

    it("click on map button", () => {
      console.log(Header);
      const { getAllByText } = renderWithRedux(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      /*const { getAllByText } = renderWithRedux(
        <App>
          <Header />
        </App>,
        {
          initialState: initialStateNotAuth,
        }
      );*/
      /*const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );*/

      //const node = getByText("Карта");
      //expect(node).not.toBeNull();
    });

    /*it("click on personal area", () => {
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
    });*/
  });
});
