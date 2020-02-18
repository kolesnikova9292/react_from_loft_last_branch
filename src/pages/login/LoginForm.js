import React, { useState } from "react";

export const LoginForm = ({ showMapEvent }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = event => {
    event.preventDefault();
    console.log(login);
    console.log(password);
    showMapEvent("my-map");
  };

  const goToRegistration = event => {
    event.preventDefault();
    showMapEvent("registration");
  };

  const handleChangeLogin = event => {
    setLogin(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleLogIn}>
        <div>
          <label>
            Логин:
            <input
              type="text"
              value={login}
              name="login"
              onChange={handleChangeLogin}
            />
          </label>
        </div>
        <div>
          <label>
            Пароль:
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Войти" />
        </div>
      </form>
      <button onClick={goToRegistration}>Перейти на регистрацию</button>
    </>
  );
};
