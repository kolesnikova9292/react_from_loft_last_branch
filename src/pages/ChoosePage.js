import React from "react";
import Map from "./map/Map";
import { PersonalArea } from "./personal_area";
import { Login } from "./login";
import { Registration } from "./registration";
import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { connect } from "react-redux";
import { getAuthFlag } from "../providers/redux/modules/auth";

const ChoosePage = props => {
  const { isAuthorized } = props;
  return (
    <>
      <Switch>
        <PrivateRoute
          path="/map"
          component={Map}
          exact
          isAuthorized={isAuthorized}
          loginPath="/login"
        />
        <PrivateRoute
          path="/personal"
          component={PersonalArea}
          exact
          isAuthorized={isAuthorized}
          loginPath="/login"
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
    isAuthorized: getAuthFlag(state),
  };
};

export default connect(mapStateToProps)(ChoosePage);
