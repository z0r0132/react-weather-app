import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  title: {
    flexGrow: 1,
  },
});

const Header = (props) => {
  const { classes } = props;
  return (
    <AppBar position="fixed">
      <Typography variant="h4" color="inherit" noWrap className={classes.title}>
        React Weather App
      </Typography>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
