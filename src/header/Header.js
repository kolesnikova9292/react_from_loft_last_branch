import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { Logo } from "loft-taxi-mui-theme";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

const Header = props => {
  const classes = useStyles();
  const { isAuthorized } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Logo edge="start" color="inherit" aria-label="menu"></Logo>
          <Typography variant="h6" className={classes.title}></Typography>
          {isAuthorized === true ? (
            <>
              <Button component={Link} to="/map" id="my-map">
                Карта
              </Button>
              <Button component={Link} to="/personal" id="personal-area">
                Профиль
              </Button>
              <Button component={Link} to="/logout" id="logout">
                Выйти
              </Button>
            </>
          ) : (
            <Button component={Link} to="/login" id="login">
              Войти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.isAuthorized,
  };
};

export default connect(mapStateToProps)(Header);
