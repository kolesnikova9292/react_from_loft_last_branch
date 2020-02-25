import React, { useState } from "react";
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  //static displayName = 'authHoc';
  //const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  const [isAuthorized, setisAuthorized] = useState(false);

  const loginContext = () => {
    setisAuthorized(true);
    console.log("qqqqqq");
  };

  const logout = () => {
    setisAuthorized(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        loginContext: loginContext,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };

/*import React, { Component } from "react";

//const AuthContext = React.createContext(); // added this

//export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    isAuthorized: false,
  };

  loginContext = () => {
    this.setState({ isAuthorized: true });
    console.log("qqqqqq");
  };

  logout = () => {
    this.setState({ isAuthorized: false });
  };

  render() {
    const { children } = this.props;
    const { isAuthorized } = this.state;
    return (
      <Provider
        value={{
          isAuthorized,
          loginContext: this.loginContext,
          logout: this.logout,
        }}
      >
        {children}
      </Provider>
    );
  }
}

/*function authHoc(WrappedComponent){
    return class extends Component{
        static displayName = 'authHoc';
        render(){
            return <AuthConsumer>
                {
                    contextProps => (<WrappedComponent {...contextProps} {...props}/>)
                }
            </AuthConsumer>
        }
    }
}

export default { AuthProvider, AuthConsumer };*/
