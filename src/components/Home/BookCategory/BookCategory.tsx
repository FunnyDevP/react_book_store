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
      <Box className="categoryContainer">
        {DummyBookCategory.map((cate) => {
          return (
            <a
              href={`#${cate}`}
              className="categoryNameLink"
              data-testid={"cate_lists"}
              key={cate}
            >
              <Typography variant={"subtitle1"} className="categoryName">
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
