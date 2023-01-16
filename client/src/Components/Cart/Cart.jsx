import { useSelector, dispatch, useDispatch } from "react-redux";

import { Box, Grid, Typography, styled, Button } from "@mui/material";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { useEffect } from "react";
import { getCartData } from "../../Redux/actions/cartAction";

const GridContainer = styled(Grid)(({ theme }) => ({
  /* border: 2px solid black, */
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));
const Header = styled(Box)`
  padding-left: 20px;
  background-color: #fff;
`;

const PlaceButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -5px 25px -8px inset;
  border: 1px solid #fff;
`;

const StyledButtonPlace = styled(Button)`
  display: flex;
  margin-left: auto;
  background-color: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 50px;
`;

const GridLeftComp = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  console.log("manish" , cartItems);

  useEffect(() => {
    dispatch(getCartData());
  }, []);
  // window.location.reload()

  return (
    <>
      {cartItems.length ? (
        <GridContainer container>
          <GridLeftComp item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length}) </Typography>
            </Header>
            {cartItems?.map((item) => (
              <CartItem item={item} />
            ))}
            <PlaceButtonWrapper>
              <StyledButtonPlace>PLACE ORDER</StyledButtonPlace>
            </PlaceButtonWrapper>
          </GridLeftComp>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView totalItem={cartItems?.length} data={cartItems} />
          </Grid>
        </GridContainer>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
