import React, { FC } from "react";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "../CustomTheme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DummyBookCategory from "../../../service/DummyBookCategory";
import "./BookCategory.css";

const BookCategory: FC = () => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Box sx={{ float: "right", width: "34%", marginTop: "20px" }}>
        {DummyBookCategory.map((cate) => {
          return (
            <a
              href={`#${cate}`}
              style={{ textDecoration: "none" }}
              data-testid={"cate_lists"}
              key={cate}
            >
              <Typography
                variant={"subtitle1"}
                sx={{
                  opacity: "50%",
                  marginLeft: "60px",
                }}
              >
                {cate}
              </Typography>
            </a>
          );
        })}
      </Box>
    </ThemeProvider>
  );
};

export default BookCategory;
