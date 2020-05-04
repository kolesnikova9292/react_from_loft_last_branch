import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchAuthRequest,
  logoutUser,
} from "../../providers/redux/modules/auth";
import { getAuthFlag } from "../../providers/redux/modules/auth";

const LoginForm = props => {
  const { fetchAuthRequest, logoutUser, isAuthorized } = props;
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthorized == true) {
      props.history.push("/map");
    }
  }, [isAuthorized]);

  if (props.goAway === true) {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      logoutUser();
      localStorage.removeItem("accessToken");
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/map" />;
    }
  }

  const handleLogIn = async event => {
    event.preventDefault();
    await fetchAuthRequest({ login, password });
  };

  const goToRegistration = event => {
    event.preventDefault();
    props.history.push("/registration");
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

const mapDispatchToProps = { fetchAuthRequest, logoutUser };

const mapStateToProps = state => {
  return {
    isAuthorized: getAuthFlag(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
