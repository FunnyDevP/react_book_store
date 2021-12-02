import React, { FC, useState } from "react";
import { Button, Dialog, Divider, Grid, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";
import { useRecoilValue } from "recoil";
import { bookSelector } from "../../state/BookState";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} timeout={450} />;
});

const ShoppingCart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resultBook = useRecoilValue(bookSelector);

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Cart
      </Button>
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxHeight: 700,
            maxWidth: 1000,
          },
        }}
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <Grid container>
          <Grid item xs={8} sx={{ padding: "36px 36px 36px 36px" }}>
            <Typography variant={"h6"}>Shopping cart</Typography>
            <Divider
              sx={{
                marginTop: "10px",
                marginBottom: "20px",
                borderColor: "black",
              }}
            />
            {resultBook.length == 0 ? (
              <Typography variant={"h5"}>
                There are no items in your cart. Find an item in Home page that
                meets your needs.
              </Typography>
            ) : (
              resultBook.map((cart) => (
                <Grid
                  item
                  xs={12}
                  data-testid={"result_book_id"}
                  key={cart.bookId}
                >
                  <Typography variant={"subtitle1"}>{cart.bookName}</Typography>
                  <Typography variant={"subtitle1"}>
                    {cart.bookPrice}
                  </Typography>
                </Grid>
              ))
            )}
          </Grid>
          {resultBook.length != 0 && (
            <Grid
              item
              xs={4}
              sx={{
                backgroundColor: "#eeeeee",
                padding: "18px 18px 18px 18px",
              }}
            >
              <Typography variant={"subtitle1"} sx={{ fontWeight: "bold" }}>
                summary {resultBook.length} items
              </Typography>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={9}></Grid>
                <Grid item xs={2}>
                  <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
                    {resultBook.length > 0 &&
                      resultBook.reduce((acc, cart) => acc + cart.bookPrice, 0)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Dialog>
    </>
  );
};

export default ShoppingCart;
