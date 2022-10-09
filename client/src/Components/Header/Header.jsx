import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";

import React from "react";
import NavButton from "./NavButton";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  const logo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURLlogo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
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
        <NavButton />
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

export default Header;
