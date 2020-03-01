import React, { useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

export const LoginForm = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginFromContext = React.useContext(AuthContext);

  /*if (loginFromContext.isAuthorized === true) {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      loginFromContext.logout();
      //showMapEvent("login");

      localStorage.removeItem("accessToken");
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/map" />;
    }
  }*/

  if (localStorage.getItem("accessToken") !== null) {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      loginFromContext.logout();
      //showMapEvent("login");

      localStorage.removeItem("accessToken");
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/map" />;
    }
  }

  /*if (alreadyLoggedIn === true) {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      loginFromContext.logout();
      showMapEvent("login");
      localStorage.removeItem("accessToken");
    }
  }*/

  /*if (alreadyLoggedIn === true) {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      loginFromContext.logout();
      showMapEvent("login");
      localStorage.removeItem("accessToken");
    }
  }*/

  const handleLogIn = async event => {
    event.preventDefault();

    const answer = await loginFromContext.loginContext(login, password);
    console.log(answer);

    if (answer !== undefined && answer.success === true) {
      localStorage.setItem("accessToken", answer.token);
      console.log(7878787);
      //showMapEvent("my-map");
      //return <Redirect to="/map" />;
      props.history.push("/map");
    }
  };

  const goToRegistration = event => {
    event.preventDefault();
    props.history.push("/registration");
    //showMapEvent("registration");
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
            label="Логин"
            color="secondary"
            type="text"
            value={login}
            name="login"
            onChange={handleChangeLogin}
          />
          <br />
          <TextField
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
