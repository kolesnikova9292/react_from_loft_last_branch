import React from "react";
import { Registration } from "../pages/registration/index";
import { fireEvent, act, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithRedux } from "./renderWithRedux";
import { initialStateNotAuth } from "./initialStateNotAuth";
import { initialStateAuthTrue } from "./initialStateAuthTrue";
import axiosMock from "axios";
import { wait } from "@testing-library/react";

jest.mock("axios");

describe("Registration", () => {
  describe("rendering of registration", () => {
    beforeEach(() => {
      require("mutationobserver-shim");
      jest.setTimeout(30000);
    });
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

    it("check rendering fields", () => {
      const { getByText } = renderWithRedux(
        <BrowserRouter>
          <Registration />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );
      const items = getByText("Фамилия");
      expect(items).not.toBeNull();
    });

    it("check step to server", async () => {
      jest.mock("axios");
      axiosMock.post.mockResolvedValueOnce({
        data: {
          email: "ghghghg@mail.ru",
          password: "ghghghg",
          name: "rtrtrt",
          surname: "aaaaa",
        },
      });
      const onSubmit = jest.fn();
      const historyMock = { push: jest.fn() };
      const { getByText, getByTestId } = renderWithRedux(
        <BrowserRouter>
          <Registration history={historyMock} />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );

      const items = getByText("Регистрация");
      expect(items).not.toBeNull();

      const loginInput = getByTestId("test_login_field").querySelector("input");
      await act(async () => {
        await fireEvent.change(loginInput, {
          target: { value: "ghghghg@mail.ru" },
        });
      });
      expect(loginInput.value).toBe("ghghghg@mail.ru");

      const passwordInput = getByTestId("test_password_field").querySelector(
        "input"
      );
      await act(async () => {
        await fireEvent.change(passwordInput, {
          target: { value: "ghghghg" },
        });
      });
      expect(passwordInput.value).toBe("ghghghg");

      const lastNameInput = getByTestId("test_lastname_field").querySelector(
        "input"
      );
      await act(async () => {
        await fireEvent.change(lastNameInput, {
          target: { value: "rtrtrt" },
        });
      });
      expect(lastNameInput.value).toBe("rtrtrt");

      const firstNameInput = getByTestId("test_firstname_field").querySelector(
        "input"
      );
      await act(async () => {
        await fireEvent.change(firstNameInput, {
          target: { value: "aaaaa" },
        });
      });
      expect(firstNameInput.value).toBe("aaaaa");

      await act(async () => {
        fireEvent.submit(items);
      });
      expect(axiosMock.post).toHaveBeenCalledTimes(1);
    });

    it("check step to server shouldn't go to server", async () => {
      jest.clearAllMocks();
      jest.mock("axios");
      axiosMock.post.mockResolvedValueOnce({
        data: {
          email: "11111",
          password: "ghghghg",
          name: "rtrtrt",
          surname: "aaaaa",
        },
      });
      const onSubmit = jest.fn();
      const historyMock = { push: jest.fn() };
      const { getByText, getByTestId } = renderWithRedux(
        <BrowserRouter>
          <Registration history={historyMock} />
        </BrowserRouter>,
        {
          initialState: initialStateNotAuth,
        }
      );

      const items = getByText("Регистрация");
      expect(items).not.toBeNull();

      const loginInput = getByTestId("test_login_field").querySelector("input");
      await act(async () => {
        await fireEvent.change(loginInput, {
          target: { value: "11111" },
        });
      });
      expect(loginInput.value).toBe("11111");

      const passwordInput = getByTestId("test_password_field").querySelector(
        "input"
      );
      await act(async () => {
        await fireEvent.change(passwordInput, {
          target: { value: "ghghghg" },
        });
      });
      expect(passwordInput.value).toBe("ghghghg");

      const lastNameInput = getByTestId("test_lastname_field").querySelector(
        "input"
      );
      await act(async () => {
        await fireEvent.change(lastNameInput, {
          target: { value: "rtrtrt" },
        });
      });
      expect(lastNameInput.value).toBe("rtrtrt");

      const firstNameInput = getByTestId("test_firstname_field").querySelector(
        "input"
      );
      await act(async () => {
        await fireEvent.change(firstNameInput, {
          target: { value: "aaaaa" },
        });
      });
      expect(firstNameInput.value).toBe("aaaaa");

      await act(async () => {
        fireEvent.submit(items);
      });
      expect(axiosMock.post).not.toHaveBeenCalledTimes(1);
    });
  });
});
