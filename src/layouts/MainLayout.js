import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles(styles);

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classNames(classes.content)}>{children}</main>
    </div>
  );
};

export default MainLayout;
