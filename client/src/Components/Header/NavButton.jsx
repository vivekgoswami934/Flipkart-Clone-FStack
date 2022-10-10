import { Box, Button, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 4%",
  "& > *": {
    marginRight: "40px",
    fontSize: "17px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
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
      <Typography style={{ marginTop: 6 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default NavButton;
