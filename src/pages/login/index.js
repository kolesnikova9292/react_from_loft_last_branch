import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { getAuthRequest } from "../../providers/redux/actions";

export const Login = props => {
  //console.log(props);
  //const { token, getAuthRequest } = props;
  //console.log(token);
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
