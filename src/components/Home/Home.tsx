import React, { FC } from "react";
import Box from "@mui/material/Box";
import BookCategory from "./BookCategory/BookCategory";
import BookList from "./BookList/BookList";

const Home: FC = () => {
  return (
    <Box
      sx={{
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: "60px",
      }}
    >
      <BookList />
      <BookCategory />
    </Box>
  );
};

export default Home;
