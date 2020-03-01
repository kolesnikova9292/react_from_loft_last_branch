import React, { useState, Component } from "react";
import "./Registration.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { AuthContext } from "../../providers/AuthContext";

export const RegistrationForm = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const loginFromContext = React.useContext(AuthContext);

  const handleRegistration = async event => {
    event.preventDefault();

    const answer = await loginFromContext.registration(
      login,
      password,
      firstname,
      lastname
    );
    console.log(answer);
    if (answer.success === true) {
      localStorage.setItem("accessToken", answer.token);
      props.history.push("/map");
      //showMapEvent("my-map");
    }
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
    <div className="divForForm">
      <Card className="cardForForm">
        <form onSubmit={handleRegistration}>
          <TextField
            id="standard-secondary"
            label="Логин"
            color="secondary"
            type="text"
            value={login}
            name="login"
            onChange={handleLoginChange}
          />
          <TextField
            id="standard-secondary"
            label="Пароль"
            color="secondary"
            type="text"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            id="standard-secondary"
            label="Фамилия"
            color="secondary"
            type="text"
            name="lastname"
            value={lastname}
            onChange={handleLastnameChange}
          />
          <TextField
            id="standard-secondary"
            label="Имя"
            color="secondary"
            type="text"
            name="firstname"
            value={firstname}
            onChange={handleFirstnameChange}
          />
          <div>
            <Button type="submit" value="">
              Регистрация
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
