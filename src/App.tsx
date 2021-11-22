import React, { FC } from "react";
import Header from "./components/Header/Header";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const App: FC = () => {
  return (
    <>
      <Header data-testid={"app-header"} />
      <Grid container>
        <Grid item xs={1} style={{ backgroundColor: "white" }}></Grid>
        <Grid item xs={7}>
          <Typography variant={"h5"}>Category 1</Typography>
        </Grid>
        <Grid item xs={4} style={{ backgroundColor: "blue" }}></Grid>
      </Grid>
    </>
  );
};

export default App;
