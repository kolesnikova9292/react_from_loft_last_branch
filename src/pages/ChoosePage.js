import React from "react";
import { Map } from "./map/Map";
import { PersonalArea } from "./personal_area/PersonalArea";
import { Login } from "./login";
import { Registration } from "./registration";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { PrivateRoute } from "./PrivateRoute";

export const ChoosePage = () => {
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
