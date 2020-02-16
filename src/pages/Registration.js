import React from "react";

class Registration extends React.Component {
  state = { login: "", password: "", firstname: "", lastname: "" };

  handleLogIn = event => {
    event.preventDefault();
    console.log(this.state.login);
    console.log(this.state.password);
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    this.props.showMapEvent("my-map");
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { login, password, lastname, firstname } = this.state;
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
            <label>
              Фамилия:
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Имя:
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Регистрация" />
          </div>
        </form>
      </>
    );
  }
}

//export default Header;
export { Registration };
