import { useSelector } from "react-redux";

import { Box, Grid, Typography, styled, Button } from "@mui/material";
import CartItem from "./CartItem";
import TotalView from "./TotalView";

const GridContainer = styled(Grid)`
  padding: 30px 135px;
  /* border: 2px solid black; */
`;
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
`

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  return (
    <>
      {cartItems.length ? (
        <GridContainer container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header >
              <Typography>My Cart ({cartItems.length}) </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <PlaceButtonWrapper>
              <StyledButtonPlace>PLACE ORDER</StyledButtonPlace>
            </PlaceButtonWrapper>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView totalItem = {cartItems?.length} />
          </Grid>
        </GridContainer>
      ) : (
        <Box>Empty !!! No Item avialable...</Box>
      )}
    </>
  );
};

export default Cart;
