import React from "react";
import { Header } from "../header/Header";
import { CountProvider } from "../providers/AuthContext";
import { render, fireEvent } from "@testing-library/react";

describe("Header", () => {
  describe("rendering of header", () => {
    let onActionMock = jest.fn();

    it("click on map button", () => {
      const { getByText } = render(<Header showMapEvent={onActionMock} />);

      const node = getByText("Карта");
      fireEvent.click(node);

      expect(onActionMock).toHaveBeenCalledWith("my-map");
    });

    it("click on personal area", () => {
      const { getByText } = render(<Header showMapEvent={onActionMock} />);

      const node = getByText("Профиль");
      fireEvent.click(node);

      expect(onActionMock).toHaveBeenCalledWith("personal-area");
    });

    it("click on logout button", () => {
      const { getByText } = render(<Header showMapEvent={onActionMock} />);

      const node = getByText("Войти");
      fireEvent.click(node);

      expect(onActionMock).toHaveBeenCalledWith("logout");
    });
  });
});
