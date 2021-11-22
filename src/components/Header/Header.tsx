import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import "./Header.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7393C2",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});
const Header: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position={"static"}
        data-testid={"app-bar"}
        className={"appBar"}
        color={"primary"}
      >
        <Typography
          variant={"h4"}
          data-testid={"app-bar-title"}
          className={"title"}
        >
          FunnyDev
        </Typography>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
