import React from "react";
import LoginForm from "./LoginForm";

export const Login = props => {
  return (
    <>
      <LoginForm {...props} />
    </>
  );
};

/*const mapStateToProps = state => {
  return {
    token: state.token,
    isAuthorized: state.isAuthorized,
  };
};
const mapDispatchToProps = { getAuthRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Login);*/
