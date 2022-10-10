import { InputBase, styled, Box, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAPI } from "../../Redux/actions/productAction";
import { Link } from "react-router-dom";

const ListWrapper = styled(List)`
  position: absolute;
  background: white;
  color: black;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProductsAPI);
  }, [dispatch]);
  return (
    <>
      <SearchBoxContainer>
        <Input
          value={text}
          placeholder="Search for products and more"
          onChange={(e) => setText(e.target.value)}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {text && (
          <ListWrapper>
            {products
              .filter((product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase())
              )
              .map((product) => (
                <ListItem>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      setText("");
                    }}

                    style={{textDecoration:"none" , color : "inherit"}}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              ))}
          </ListWrapper>
        )}
      </SearchBoxContainer>
    </>
  );
};

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
  color: #2874f0; ;
`;

export default Search;
