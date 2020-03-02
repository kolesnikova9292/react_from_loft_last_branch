import React from "react";
import { Map } from "./map/Map";
import { PersonalArea } from "./personal_area/PersonalArea";
import { Login } from "./login";
import { Registration } from "./registration";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

export const ChoosePage = () => {
  const loginFromContext = React.useContext(AuthContext);
  return (
    <>
      <Switch>
        <Route path="/map" component={Map} exact />
        <Route path="/personal" component={PersonalArea} exact />
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
