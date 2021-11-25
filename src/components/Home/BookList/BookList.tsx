import React, { FC } from "react";
import Box from "@mui/material/Box";
import BookData from "../../../service/DummyBookData";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "../CustomTheme";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const BookList: FC = () => {
  return (
    <Box
      sx={{
        width: "66%",
        display: "inline-block",
      }}
    >
      {BookData.data.map((data) => {
        return (
          <div data-testid={"book_lists_data"} key={data.CategoryName}>
            <ThemeProvider theme={CustomTheme}>
              <Typography
                variant={"h5"}
                sx={{ marginTop: "20px" }}
                id={data.CategoryName}
                data-testid={"category_name"}
              >
                {data.CategoryName}
              </Typography>
              <Divider sx={{ marginTop: "5px" }} />
              {data.BookData.map((data) => (
                <div key={data.id} data-testid={"category_lists"}>
                  <Typography variant={"h6"}>{data.name}</Typography>
                  <Typography variant={"subtitle2"} sx={{ opacity: "50%" }}>
                    {data.author}
                  </Typography>
                  <Divider sx={{ marginTop: "5px" }} />
                </div>
              ))}
            </ThemeProvider>
          </div>
        );
      })}
    </Box>
  );
};

export default BookList;
