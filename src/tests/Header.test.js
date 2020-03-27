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

    it("check login button", () => {
      console.log(Header);
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const node = getByText("Войти");
      expect(node).not.toBeNull();
    });

    it("check personal area button", () => {
      console.log(Header);
      const { queryByTestId } = renderWithRedux(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      const node = queryByTestId("personal-area");
      expect(node).not.toBeNull();
    });

    it("check personal area button", () => {
      console.log(Header);
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      const node = getByText("Выйти");
      expect(node).not.toBeNull();
    });
  });
});
