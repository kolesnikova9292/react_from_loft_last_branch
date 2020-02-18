import React from "react";
import RegistrationForm from "./RegistrationForm";

export const Registration = ({ showMapEvent }) => {
  return (
    <>
      <h1>Регистрация</h1>
      <RegistrationForm showMapEvent={showMapEvent} />
    </>
  );
};
