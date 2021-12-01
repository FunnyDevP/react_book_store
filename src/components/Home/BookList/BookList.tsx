import React, { FC, useEffect, useState } from "react";
import { BookData, Data } from "../../../models/Book";
import HttpClient from "../../../service/api/API";
import { Box, Divider, Grid, ThemeProvider, Typography } from "@mui/material";
import CustomTheme from "../CustomTheme";
import MonthNumToMonthName from "../../../utils/MonthConverter";
import "./BookList.css";
import { useRecoilState } from "recoil";
import { bookState } from "../../../state/BookState";

const BookList: FC = () => {
  const [books, setBooks] = useState<Data>();
  const [isLoading, setIsLoading] = useState(true);
  const [bookCart, setBookCart] = useRecoilState(bookState);

  useEffect(() => {
    HttpClient.getAll().then((resp) => {
      setBooks(resp.data);

      setIsLoading(false);
    });
  }, []);

  const handleAddToCart = (data: BookData, bookCateId: string) => {
    setBookCart([
      ...bookCart,
      {
        bookId: data.id,
        bookCateId: bookCateId,
        bookName: data.name,
        bookPrice: data.price,
      },
    ]);
  };

  return (
    <Box
      sx={{
        width: "66%",
        display: "inline-block",
      }}
    >
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        books != undefined && bookList(books, handleAddToCart)
      )}
    </Box>
  );
};

const bookList = (
  booksData: Data,
  handleFunc: (data: BookData, bookCateId: string) => void
) =>
  booksData.data.map((dataInform) => {
    return (
      <div data-testid={"book_lists_data"} key={dataInform.categoryId}>
        <ThemeProvider theme={CustomTheme}>
          <Typography
            variant={"h5"}
            sx={{ marginTop: "20px" }}
            id={dataInform.categoryName}
            data-testid={"category_name"}
          >
            {dataInform.categoryName}
          </Typography>
          <Divider sx={{ marginTop: "5px" }} />
          {dataInform.books.map((data) => (
            <div
              key={data.id}
              data-testid={"category_lists"}
              className="bookContainer"
              onClick={() => handleFunc(data, dataInform.categoryId)}
            >
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant={"h6"}>{data.name}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant={"subtitle2"} sx={{ textAlign: "end" }}>
                    Publication{" "}
                    {MonthNumToMonthName(
                      new Date(data.publicationAt).getMonth() + 1
                    )}{" "}
                    2021
                  </Typography>
                </Grid>
              </Grid>

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
