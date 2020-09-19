export default (theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    position: "relative",
    width: "75%",
    height: "300px",
    background: theme.palette.common.white,
  },
  [theme.breakpoints.down("sm")]: {
    root: {
      width: "100%",
    },
  },
});
