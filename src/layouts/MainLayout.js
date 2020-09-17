import React, { Fragment, Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import Header from "../components/Header";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.common.white,
    height: "100%",
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(7),
  },
});

class MainLayout extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Header />
          <main className={classNames(classes.content)}>{children}</main>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainLayout);
