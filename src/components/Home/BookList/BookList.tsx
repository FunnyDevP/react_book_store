import React, { FC } from "react";
import Box from "@mui/material/Box";
import BookData from "../../../service/DummyBookData";
import { ThemeProvider } from "@mui/material";
import CustomTheme from "../CustomTheme";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./BookList.css";

const BookList: FC = () => {
  return (
    <Box className="bookListContainer">
      {BookData.data.map((data) => {
        return (
          <div data-testid={"book_lists_data"} key={data.CategoryName}>
            <ThemeProvider theme={CustomTheme}>
              <Typography
                variant={"h5"}
                className="categoryName"
                id={data.CategoryName}
                data-testid={"category_name"}
              >
                {data.CategoryName}
              </Typography>
              <Divider className="divider" />
              {data.BookData.map((data) => (
                <div key={data.id} data-testid={"category_lists"}>
                  <Typography variant={"h6"}>{data.name}</Typography>
                  <Typography variant={"subtitle2"} className="bookAuthor">
                    {data.author}
                  </Typography>
                  <Divider className="divider" />
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
