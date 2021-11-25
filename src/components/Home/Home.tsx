import React, { FC } from "react";
import Box from "@mui/material/Box";
import BookCategory from "./BookCategory/BookCategory";
import BookList from "./BookList/BookList";
import "./Home.css";

const Home: FC = () => {
  return (
    <Box className="container">
      <BookList />
      <BookCategory />
    </Box>
  );
};

export default Home;
