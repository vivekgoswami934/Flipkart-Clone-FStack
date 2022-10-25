import { Box, Button, Typography, styled, Badge } from "@mui/material";
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartData } from "../../Redux/actions/cartAction";

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  // border : "2px solid black",
  "& > *": {
    marginRight: "40px !important",
    fontSize: "17px",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  height: "42px";
  border-radius: 2px;
  box-shadow: none;
  font-weight: 620;
`;
const NavButton = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(!open);
  };
   const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart);

    useEffect(()=>{
      dispatch(getCartData())
    },[dispatch])

  console.log("navbar",cartItems);

  const { account, setAccount } = useContext(DataContext);

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton
          variant="contained"
          onClick={() => {
            openDialog();
          }}
        >
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 6, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 6 }}> More </Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems.length} color="warning">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft: 12}} >Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default NavButton;
