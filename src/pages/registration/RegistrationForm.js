import React, { useState } from "react";
import "./Registration.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { fetchRegistrationRequest } from "../../providers/redux/modules/auth";

const RegistrationForm = props => {
  const { fetchRegistrationRequest } = props;
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleRegistration = async event => {
    try {
      event.preventDefault();

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

const mapDispatchToProps = { fetchRegistrationRequest };

export default connect(null, mapDispatchToProps)(RegistrationForm);
