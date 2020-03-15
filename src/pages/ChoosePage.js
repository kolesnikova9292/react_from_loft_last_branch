import React from "react";
import Map from "./map/Map";
import { PersonalArea } from "./personal_area/PersonalArea";
import { Login } from "./login";
import { Registration } from "./registration";
import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { connect } from "react-redux";

const ChoosePage = props => {
  const { isAuthorized } = props;
  console.log(props);
  return (
    <>
      <Switch>
        <PrivateRoute
          path="/map"
          component={Map}
          exact
          isAuthorized={isAuthorized}
          loginPath="/login"
          exact
        />
        <PrivateRoute
          path="/personal"
          component={PersonalArea}
          exact
          isAuthorized={isAuthorized}
          loginPath="/login"
          exact
        />
        <Route path="/registration" component={Registration} exact />
        <Route path="/login" component={Login} exact />
        <Route
          path="/logout"
          render={props => <Login {...props} goAway={true} />}
          exact
        />
        <Route path="/" component={isAuthorized == true ? Map : Login} exact />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps)(ChoosePage);

/*const ChoosePage = () => {
  const loginFromContext = React.useContext(AuthContext);
  return (
    <>
      <Switch>
        <PrivateRoute
          path="/map"
          component={Map}
          exact
          isAuthorized={loginFromContext.isAuthorized}
          loginPath="/login"
          exact
        />
        <PrivateRoute
          path="/personal"
          component={PersonalArea}
          exact
          isAuthorized={loginFromContext.isAuthorized}
          loginPath="/login"
          exact
        />
        <Route path="/registration" component={Registration} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Login} exact />
        <Route
          path="/"
          component={loginFromContext.isAuthorized == true ? Map : Login}
          exact
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default ChoosePage;*/
