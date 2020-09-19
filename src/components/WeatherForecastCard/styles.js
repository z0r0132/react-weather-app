export default (theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    color: theme.palette.common.white,
    cursor: "pointer",
    minWidth: 200,
    position: "relative",
    border: ({ id, activeDate }) => activeDate === id && "2px solid",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  h2: {
    fontWeight: 400,
  },
  h5: {
    textTransform: "capitalize",
  },
});
