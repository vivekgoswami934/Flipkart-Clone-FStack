import { useSelector } from "react-redux";

import { Box, Grid, Typography, styled } from "@mui/material";
import CartItem from "./CartItem";
import TotalView from "./TotalView";

const GridContainer = styled(Grid)`
  padding: 30px 135px;
  border: 2px solid black;
`;
const Header = styled(Box)`
  padding-left: 20px;
`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  return (
    <>
      {cartItems.length ? (
        <GridContainer container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length}) </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView />
          </Grid>
        </GridContainer>
      ) : (
        <Box>Empty !!! No Item avialable...</Box>
      )}
    </>
  );
};

export default Cart;
