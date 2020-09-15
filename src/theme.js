import { indigo, green, red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: indigo,
    secondary: green,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});
