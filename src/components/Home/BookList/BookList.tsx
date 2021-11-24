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
          <>
            <ThemeProvider theme={CustomTheme}>
              <Typography variant={"h5"} sx={{ marginTop: "20px" }}>
                {data.CategoryName}
              </Typography>
              <Divider sx={{ marginTop: "5px" }} />
              {data.BookData.map((data) => (
                <>
                  <Typography variant={"h6"}>{data.name}</Typography>
                  <Typography variant={"subtitle2"} sx={{ opacity: "50%" }}>
                    {data.author}
                  </Typography>

                  <Divider sx={{ marginTop: "5px" }} />
                </>
              ))}
            </ThemeProvider>
          </>
        );
      })}
    </Box>
  );
};

export default BookList;
