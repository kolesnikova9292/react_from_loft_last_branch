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
import { RHFInput } from "react-hook-form-input";

const LoginForm = props => {
  const { fetchAuthRequest, logoutUser, isAuthorized, error } = props;
  const { register, handleSubmit, errors, setValue } = useForm();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setValue("login", "email@example.com");
    setValue("password", "password");
    if (isAuthorized === true) {
      props.history.push("/map");
    }
    if (error != null) {
      setOpen(true);
    }
  }, [isAuthorized, error, setValue]);

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
    const { login, password } = data;

    await fetchAuthRequest({ login, password });
  };

  const goToRegistration = event => {
    event.preventDefault();
    props.history.push("/registration");
  };

  const handleCloseSnackBar = () => {
    setOpen(false);
  };

  return (
    <div className="divForForm">
      <Card className="cardForForm">
        <form onSubmit={handleSubmit(handleLogIn)}>
          <RHFInput
            as={
              <TextField
                className="textFieldForLoginForm"
                label="Логин"
                color="secondary"
                type="text"
                error={errors.login != null ? true : false}
              />
            }
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
            }}
            helperText={returnError(errors.login)}
            name="login"
            register={register}
            setValue={setValue}
          />
          <br />
          <RHFInput
            as={
              <TextField
                label="Пароль"
                color="secondary"
                type="text"
                className="textFieldForLoginForm"
                error={errors.password != null ? true : false}
              />
            }
            helperText={returnError(errors.password)}
            rules={{ required: true }}
            name="password"
            register={register}
            setValue={setValue}
          />
          <br />
          {/*<TextField
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
            helperText={returnError(errors.login)}
            setValue={setValue}
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
            helperText={returnError(errors.password)}
          />
          <br />*/}
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
