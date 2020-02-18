import React, { useState } from "react";

export const LoginForm = ({ showMapEvent }) => {
  /*constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }*/

  //state = { login: "", password: "" };
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = event => {
    event.preventDefault();
    console.log(login);
    console.log(password);
    showMapEvent("my-map");
    //console.log(props);
  };

  const goToRegistration = event => {
    event.preventDefault();
    showMapEvent("registration");
  };

  const handleChangeLogin = event => {
    setLogin(event.target.value);
    // this.setState({ [event.target.name]: event.target.value });
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
    // this.setState({ [event.target.name]: event.target.value });
  };

  return (
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
};

/*handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };*/

/* render() {
    const { login, password } = this.state;
    return (
      <>
        <h1>Выйти</h1>
        <form onSubmit={this.handleLogIn}>
          <div>
            <label>
              Логин:
              <input
                type="text"
                value={login}
                name="login"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Войти" />
          </div>
        </form>
        <button onClick={this.goToRegistration}>Перейти на регистрацию</button>
      </>
    );
  }
}*/

//export default Header;
//export { LoginForm };
