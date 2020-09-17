import React from "react";
import classNames from "classnames";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Header = (props) => {
  const { classes } = props;
  return (
    <AppBar
      position="fixed"
      className={classNames({
        [classes.appbar]: true,
        [classes.appbarColor]: true,
      })}
    >
      <Typography variant="h4" color="inherit" noWrap className={classes.title}>
        React Weather App
      </Typography>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
