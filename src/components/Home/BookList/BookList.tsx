import React, { FC, useEffect, useState } from "react";
import { Data } from "../../../models/Book";
import HttpClient from "../../../service/api/API";
import { Box, Divider, ThemeProvider, Typography } from "@mui/material";
import CustomTheme from "../CustomTheme";

const BookList: FC = () => {
  const [books, setBooks] = useState<Data>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    HttpClient.getAll().then((resp) => {
      setBooks(resp.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box
      sx={{
        width: "66%",
        display: "inline-block",
      }}
    >
      {isLoading ? <h1>loading...</h1> : books != undefined && bookList(books)}
    </Box>
  );
};

const bookList = (booksData: Data) =>
  booksData.data.map((data) => {
    return (
      <div data-testid={"book_lists_data"} key={data.categoryId}>
        <ThemeProvider theme={CustomTheme}>
          <Typography
            variant={"h5"}
            sx={{ marginTop: "20px" }}
            id={data.categoryName}
            data-testid={"category_name"}
          >
            {data.categoryName}
          </Typography>
          <Divider sx={{ marginTop: "5px" }} />
          {data.books.map((data) => (
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
  });
export default BookList;
