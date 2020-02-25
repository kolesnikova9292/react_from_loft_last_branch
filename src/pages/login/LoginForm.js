import React, { useState } from "react";
import { CountStateContext } from "../../providers/AuthContext";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export const LoginForm = ({ showMapEvent }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginFromContext = React.useContext(CountStateContext);
  console.log(loginFromContext);

  const handleLogIn = event => {
    event.preventDefault();
    console.log(login);
    console.log(password);
    loginFromContext.loginContext();
    //loginFromContext();
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

/*return (
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
};*/
