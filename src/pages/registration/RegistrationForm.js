import React, { useState } from "react";

export const Registration = ({ showMapEvent }) => {
  //state = { login: "", password: "", firstname: "", lastname: "" };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleRegistration = event => {
    event.preventDefault();
    console.log(login);
    console.log(password);
    console.log(firstname);
    console.log(lastname);
    showMapEvent("my-map");
  };

  const handleLoginChange = event => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleLastnameChange = event => {
    setLastname(event.target.value);
  };

  const handleFirstnameChange = event => {
    setFirstname(event.target.value);
  };

  return (
    <>
      <h1>Выйти</h1>
      <form onSubmit={handleRegistration}>
        <div>
          <label>
            Логин:
            <input
              type="text"
              value={login}
              name="login"
              onChange={handleLoginChange}
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
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <label>
            Фамилия:
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleLastnameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleFirstnameChange}
            />
          </label>
        </div>
        <div>
          <input type="submit" value="Регистрация" />
        </div>
      </form>
    </>
  );
};
