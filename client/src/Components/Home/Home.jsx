//Fragment
import { styled, Box } from "@mui/material";

import React from "react";
import { useEffect } from "react";
import { getProductsAPI } from "../../Redux/actions/productAction";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
     const {getProducts} = data  ;
  console.log(data);

  useEffect(() => {
    dispatch(getProductsAPI());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
