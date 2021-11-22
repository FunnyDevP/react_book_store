import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import "./Header.css";
import { createTheme, ThemeProvider } from "@mui/material";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    cornFlower?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#7393C2",
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
          variant={"h5"}
          data-testid={"app-bar-title"}
          className={"title"}
        >
          FunnyDev BookStore
        </Typography>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
