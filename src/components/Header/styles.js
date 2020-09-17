export default (theme) => ({
  appbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  appbarColor: {
    background: theme.palette.background.dark,
  },
  title: {
    flexGrow: 1,
    display: "inline-block",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    fontSize: "2rem",
    letterSpacing: "1px",
    color: theme.palette.common.white,
  },
});
