import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import NavButton from "./NavButton";
import Search from "./Search";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MenuButtonWrapper = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  const logo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURLlogo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const drawerOpen = () => {
    setOpen(true);
  };

  const drawerClose = () => {
    setOpen(false);
  };

  const list = () => {
    return (
      <Box onClick={drawerClose} style={{ width: 200 }} >
        <List>
          <ListItem button>
            <NavButton />
          </ListItem>
        </List>
      </Box>
    );
  };
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButtonWrapper color="inherit" onClick={drawerOpen}>
          <MenuIcon />
        </MenuButtonWrapper>
        <Drawer open={open} onClose={drawerClose}>
          {list()}
        </Drawer>
        <LogoBox to="/">
          <img src={logo} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFe500" }}>
                Plus
              </Box>
            </SubHeading>
            <SubLogo src={subURLlogo} alt="sublogo" />
          </Box>
        </LogoBox>
        <Search />
        <CustomButtonWrapper>
          <NavButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const LogoBox = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const SubLogo = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 3,
});

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 auto",
  display: "flex",
  // marginRight: "15px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export default Header;
