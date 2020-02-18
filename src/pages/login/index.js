import React from "react";
import { LoginForm } from "./LoginForm";

export const Login = ({ showMapEvent }) => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm showMapEvent={showMapEvent} />
    </>
  );
};

/*class Login extends React.Component {
  state = { login: "", password: "" };

  handleLogIn = event => {
    event.preventDefault();
    console.log(this.state.login);
    console.log(this.state.password);
    this.props.showMapEvent("my-map");
  };

  goToRegistration = event => {
    event.preventDefault();
    this.props.showMapEvent("registration");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
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
//export { Login };
