import React from "react";
import App from "../App";
import { Registration } from "../pages/registration/index";
import {
  render,
  fireEvent,
  waitForElement,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";
import axiosMock from "axios";
import fetchMock from "fetch-mock";

jest.mock("axios");

describe("Login", () => {
  describe("rendering of login", () => {
    it("check rendering", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );

      const items = getByText("Регистрация");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Логин");
      expect(items).not.toBeNull();
    });
    it("check rendering fields", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Пароль");
      expect(items).not.toBeNull();
    });

    it("check rendering fields", async () => {
      jest.mock("axios");
      const historyMock = { push: jest.fn() };
      axiosMock.post.mockResolvedValueOnce({
        data: {
          email: "login",
          password: "password",
          name: "firstname",
          surname: "lastname",
        },
      });
      const { getByText, getByRole } = renderWithRedux(
        <BrowserRouter>
          <Registration history={historyMock} />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Регистрация");
      expect(items).not.toBeNull();

      // console.log(items);
      fireEvent.submit(items);

      expect(axiosMock.post).toHaveBeenCalledTimes(1);
      //await waitFor(() => expect(onActionMock).toHaveBeenCalledTimes(1));
      /* let onActionMock = jest.fn();
      const historyMock = { push: jest.fn() };
      axiosMock.get.mockResolvedValueOnce({
        data: { greeting: "hello there" },
      });

      fetchMock.getOnce("/fetchRegistrationRequest", {
        body: {
          email: "login",
          password: "password",
          name: "firstname",
          surname: "lastname",
        },
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: "GET_REGISTRATION_REQUEST" },
        {
          type: "GET_REGISTRATION_SUCCESS",
          body: {
            email: "login",
            password: "password",
            name: "firstname",
            surname: "lastname",
          },
        },
      ];

      const { getByText, getByRole } = renderWithRedux(
        <BrowserRouter>
          <Registration
            fetchRegistrationRequest={onActionMock}
            history={historyMock}
          />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Регистрация");
      expect(items).not.toBeNull();

      axiosMock.get.mockResolvedValueOnce({
        data: { greeting: "hello there" },
      });

      // console.log(items);
      fireEvent.submit(items);

      expect(onActionMock).toHaveBeenCalledTimes(1);*/
      //await waitFor(() => expect(onActionMock).toHaveBeenCalledTimes(1));
    });

    /*it("check rendering logout context function", () => {
      localStorage.setItem("accessToken", "answer.token");
      window.confirm = jest.fn();
      renderWithRedux(
        <BrowserRouter>
          <Login goAway={true} />
        </BrowserRouter>,
        {
          initialState: initialStateAuthTrue,
        }
      );
      expect(window.confirm).toBeCalled();
    });*/
  });
});
