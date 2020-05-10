import React, { useState } from "react";
import "./Registration.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchRegistrationRequest } from "../../providers/redux/modules/auth";
import { useForm } from "react-hook-form";
import { returnError } from "../login/LoginForm";

const RegistrationForm = props => {
  const { fetchRegistrationRequest } = props;
  const { register, handleSubmit, errors } = useForm();
  /*const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");*/

  const handleRegistration = async data => {
    try {
      //event.preventDefault();
      const { login, password, firstname, lastname } = data;
      console.log(data);
      console.log(login, password, firstname, lastname);
      await fetchRegistrationRequest({
        email: login,
        password: password,
        name: firstname,
        surname: lastname,
      });

      props.history.push("/map");
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
            helperText={returnError(errors.login)}
          />
          <TextField
            id="standard-secondary"
            label="Пароль"
            color="secondary"
            type="text"
            name="password"
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
            error={errors.lastname != null ? true : false}
            inputRef={register({ required: true, pattern: /^[a-zA-Z '.-]*$/i })}
            helperText={returnError(errors.lastname)}
          />
          <TextField
            id="standard-secondary"
            label="Имя"
            color="secondary"
            type="text"
            name="firstname"
            error={errors.firstname != null ? true : false}
            inputRef={register({ required: true, pattern: /^[a-zA-Z '.-]*$/i })}
            helperText={returnError(errors.firstname)}
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

const mapDispatchToProps = { fetchRegistrationRequest };

export default connect(null, mapDispatchToProps)(RegistrationForm);
