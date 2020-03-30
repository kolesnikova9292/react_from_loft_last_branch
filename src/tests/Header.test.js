import React from "react";
import Header from "../header/Header";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";

describe("Header", () => {
  describe("rendering of header", () => {
    it("check login button", () => {
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
