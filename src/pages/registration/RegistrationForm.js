import React, { useState, useEffect } from "react";
import "./Registration.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchRegistrationRequest } from "../../providers/redux/modules/auth";
import { useForm } from "react-hook-form";
import { returnError } from "../login/LoginForm";
import Snackbar from "@material-ui/core/Snackbar";
import { getError } from "../../providers/redux/modules/auth";
import { getAuthFlag } from "../../providers/redux/modules/auth";

const RegistrationForm = props => {
  const { fetchRegistrationRequest, error, isAuthorized } = props;
  const { register, handleSubmit, errors } = useForm();
  const [open, setOpen] = useState(false);
  /*const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");*/

  useEffect(() => {
    if (isAuthorized === true) {
      props.history.push("/map");
    }
    if (error != null) {
      setOpen(true);
    }
  }, [isAuthorized, error]);

  const handleRegistration = async data => {
    try {
      //event.preventDefault();
      const { login, password, firstname, lastname } = data;
      console.log(data);
      console.log(login, password, firstname, lastname);
      console.log(fetchRegistrationRequest);
      await fetchRegistrationRequest({
        email: login,
        password: password,
        name: firstname,
        surname: lastname,
      });
      /*if (error == null) {
        props.history.push("/map");
      } else {
        setOpen(true);
      }*/
    } catch (error) {
      // your catch block code goes here
    }
  };

  /*const handleLoginChange = event => {
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
  };*/

  const handleCloseSnackBar = () => {
    setOpen(false);
  };

  return (
    <div className="divForForm">
      <Card className="cardForForm">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <TextField
            id="standard-secondary"
            label="Логин"
            color="secondary"
            type="text"
            name="login"
            error={errors.login != null ? true : false}
            inputRef={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
            })}
            data-testid="test_login_field"
            helperText={returnError(errors.login)}
          />
          <TextField
            id="standard-secondary"
            label="Пароль"
            color="secondary"
            type="text"
            name="password"
            data-testid="test_password_field"
            error={errors.password != null ? true : false}
            inputRef={register({ required: true })}
            helperText={returnError(errors.password)}
          />
          <TextField
            id="standard-secondary"
            label="Фамилия"
            color="secondary"
            type="text"
            name="lastname"
            data-testid="test_lastname_field"
            error={errors.lastname != null ? true : false}
            inputRef={register({
              required: true,
              pattern: /^[а-яА-ЯёЁa-zA-Z '.-]*$/i,
            })}
            helperText={returnError(errors.lastname)}
          />
          <TextField
            id="standard-secondary"
            label="Имя"
            color="secondary"
            type="text"
            name="firstname"
            data-testid="test_firstname_field"
            error={errors.firstname != null ? true : false}
            inputRef={register({
              required: true,
              pattern: /^[а-яА-ЯёЁa-zA-Z '.-]*$/i,
            })}
            helperText={returnError(errors.firstname)}
          />
          <div>
            <Button type="submit" value="">
              Регистрация
            </Button>
          </div>
        </form>
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

const mapDispatchToProps = { fetchRegistrationRequest };

const mapStateToProps = state => {
  return {
    isAuthorized: getAuthFlag(state),
    error: getError(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
