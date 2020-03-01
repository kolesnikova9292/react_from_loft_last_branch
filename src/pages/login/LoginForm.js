import React, { useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export const LoginForm = ({ showMapEvent, alreadyLoggedIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginFromContext = React.useContext(AuthContext);

  if (alreadyLoggedIn === true) {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      loginFromContext.logout();
      showMapEvent("login");
      localStorage.removeItem("accessToken");
    }
  }

  const handleLogIn = async event => {
    event.preventDefault();

    const answer = await loginFromContext.loginContext(login, password);
    console.log(answer);

    if (answer !== undefined && answer.success === true) {
      localStorage.setItem("accessToken", answer.token);
      showMapEvent("my-map");
    }
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
    <div className="divForForm">
      <Card className="cardForForm">
        <form onSubmit={handleLogIn}>
          <TextField
            id="standard-secondary"
            label="Логин"
            color="secondary"
            type="text"
            value={login}
            name="login"
            onChange={handleChangeLogin}
          />
          <br />
          <TextField
            id="standard-secondary"
            label="Пароль"
            color="secondary"
            type="text"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <br />
          <Button type="submit" value="Войти">
            Войти
          </Button>
        </form>
        <Button onClick={goToRegistration}>Перейти на регистрацию</Button>
      </Card>
    </div>
  );
};
