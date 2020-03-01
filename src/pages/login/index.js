import React from "react";
import { LoginForm } from "./LoginForm";

export const Login = ({ showMapEvent, alreadyLoggedIn }) => {
  return (
    <>
      <LoginForm
        showMapEvent={showMapEvent}
        alreadyLoggedIn={alreadyLoggedIn}
      />
    </>
  );
};
