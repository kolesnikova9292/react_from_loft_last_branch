import React from "react";
import { LoginForm } from "./LoginForm";

export const Login = ({ showMapEvent }) => {
  return (
    <>
      <h1>Войти</h1>
      <LoginForm showMapEvent={showMapEvent} />
    </>
  );
};
