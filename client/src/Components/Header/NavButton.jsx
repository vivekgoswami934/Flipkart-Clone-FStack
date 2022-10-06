import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { useState } from "react";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & div {
    margin-right: 40px;
    font-size: 17px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 4px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 620;
`;
const NavButton = () => {
  const [open, setOpen] = useState(false);
 
   const openDialog = () =>{
     setOpen(!open)
   }

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={()=>{openDialog()}} >Login</LoginButton>
      <Typography style={{ marginTop: "3px" }}>Become a Seller</Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen = {setOpen} />
    </Wrapper>
  );
};

export default NavButton;
