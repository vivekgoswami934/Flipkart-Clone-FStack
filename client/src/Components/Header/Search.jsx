import { InputBase, styled, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchBoxContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 4px;
  margin-left: 10px;
  display: flex;
`;

const Input = styled(InputBase)`
  width: 109%;
  margin-left: 6px;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: #2874f0;;
`;

const Search = () => {
  return (
    <>
      <SearchBoxContainer>
        <Input placeholder="Search for products and more" />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBoxContainer>
    </>
  );
};

export default Search;
