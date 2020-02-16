import React from "react";

class Login extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }*/

  state = { login: "", password: "" };

  handleLogIn = event => {
    event.preventDefault();
    console.log(this.state.login);
    console.log(this.state.password);
    this.props.showMapEvent("my-map");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /*handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };*/

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
      </>
    );
  }
}

//export default Header;
export { Login };
