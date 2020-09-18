import { indigo, red, lightBlue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
const white = "#FFF";
const black = "#000";

export default createMuiTheme({
  palette: {
    type: "dark",
    background: {
      light: "#86B9E0",
      dark: "rgb(26, 26, 26)",
    },
    common: {
      white,
      black,
    },
    primary: indigo,
    secondary: lightBlue,
    error: red,
    contrastThreshold: 3,
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});
