import React from "react";

export const Header = props => {
  return (
    <div>
      <div onClick={() => props.showMapEvent("my-map")} id="my-map">
        Карта
      </div>
      <div
        onClick={() => props.showMapEvent("personal-area")}
        id="personal-area"
      >
        Личный кабинет
      </div>
      <div onClick={() => props.showMapEvent("logout")} id="logout">
        Выйти
      </div>
    </div>
  );
};
