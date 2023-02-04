import { Box, Button, Menu, MenuItem, styled, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeEmptyCartData } from "../../Redux/actions/cartAction";

const MenuComponent = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = () => {
     dispatch(makeEmptyCartData())
    localStorage.removeItem("flipKartToken")
    localStorage.removeItem("flipkartUserName");
    setAccount("");
  };
  return (
    <>
      <Box onClick={handleClick} style={{ marginRight: "20px !important" }}>
        <Button
          variant="contained"
          color="warning"
          style={{
            marginTop: 1,
            cursor: "pointer",
            padding: "8px 25px",
            marginRight: "40px !important",
          }}
        >
          {account}
        </Button>
      </Box>
      <MenuComponent anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </MenuComponent>
    </>
  );
};

export default Profile;
