import React from "react";
import { LoginForm } from "./LoginForm";

export const Login = props => {
  console.log(props);
  return (
    <>
      <LoginForm {...props} />
    </>
  );
};
