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
import { getError } from "../../providers/redux/modules/auth";
import { useForm } from "react-hook-form";
import Snackbar from "@material-ui/core/Snackbar";

const LoginForm = props => {
  const { fetchAuthRequest, logoutUser, isAuthorized, error } = props;
  const { register, handleSubmit, errors } = useForm();
  //console.log(errors);
  //const [login, setLogin] = useState("");
  //const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  console.log(error);

  useEffect(() => {
    if (isAuthorized === true) {
      props.history.push("/map");
    }
    if (error != null) {
      setOpen(true);
    }
  }, [isAuthorized, error]);

  if (props.goAway === true) {
    if (window.confirm("Вы уверены, что хотите выйти?")) {
      logoutUser();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("first_point");
      localStorage.removeItem("second_point");
      return <Redirect to="/login" />;
    } else {
      return <Redirect to="/map" />;
    }
  }

  const handleLogIn = async data => {
    //event.preventDefault();
    console.log(data);
    const { login, password } = data;
    console.log(login);
    console.log(password);
    await fetchAuthRequest({ login, password });
  };

  const goToRegistration = event => {
    event.preventDefault();
    props.history.push("/registration");
  };

  const handleCloseSnackBar = () => {
    setOpen(false);
  };

  console.log(open);
  /*const handleChangeLogin = event => {
    setLogin(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };*/

  return (
    <div className="divForForm">
      <Card className="cardForForm">
        <form onSubmit={handleSubmit(handleLogIn)}>
          <TextField
            className="textFieldForLoginForm"
            label="Логин"
            color="secondary"
            type="text"
            name="login"
            error={errors.login != null ? true : false}
            inputRef={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
            })}
            helperText={
              returnError(errors.login)
              /* errors.login !== undefined && errors.login.type === "required"
                ? "Поле обязательно"
                : errors.login !== undefined && errors.login.type === "pattern"
                ? "Недопустимый формат"
                : null*/
            }
          />
          <br />
          <TextField
            label="Пароль"
            color="secondary"
            type="text"
            name="password"
            className="textFieldForLoginForm"
            inputRef={register({ required: true })}
            error={errors.password != null ? true : false}
            helperText={
              returnError(errors.password)
              /* errors.password !== undefined &&
              errors.password.type === "required"
                ? "Поле обязательно"
                : errors.password !== undefined &&
                  errors.password.type === "pattern"
                ? "Недопустимый формат"
                : null*/
            }
          />
          <br />
          <Button type="submit" value="Войти">
            Войти
          </Button>
        </form>
        <Button onClick={goToRegistration}>Перейти на регистрацию</Button>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleCloseSnackBar}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{error}</span>}
      />
    </div>
  );
};

const mapDispatchToProps = { fetchAuthRequest, logoutUser };

const mapStateToProps = state => {
  return {
    isAuthorized: getAuthFlag(state),
    error: getError(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export function returnError(error) {
  return error !== undefined && error.type === "required"
    ? "Поле обязательно"
    : error !== undefined && error.type === "pattern"
    ? "Недопустимый формат"
    : null;
}

/*const LoginForm = props => {
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);*/
