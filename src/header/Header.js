import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { Logo } from "loft-taxi-mui-theme";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#ffffff",
  },
}));

export const Header = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Logo edge="start" color="inherit" aria-label="menu"></Logo>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button
            color="inherit"
            onClick={() => props.showMapEvent("my-map")}
            id="my-map"
          >
            Карта
          </Button>
          <Button
            color="inherit"
            onClick={() => props.showMapEvent("personal-area")}
            id="personal-area"
          >
            Профиль
          </Button>
          <Button
            color="inherit"
            onClick={() => props.showMapEvent("logout")}
            id="logout"
          >
            Войти
          </Button>
        </Toolbar>
      </AppBar>
    </div>
    /*<div>
      <div onClick={() => props.showMapEvent("my-map")} id="my-map">
        Карта
      </div>
      <div
        onClick={() => props.showMapEvent("personal-area")}
        id="personal-area"
      >
        Личный кабинет
      </div>
      <div onClick={() => props.showMapEvent("logout")} id="logout">
        Выйти
      </div>
    </div>*/
  );
};
