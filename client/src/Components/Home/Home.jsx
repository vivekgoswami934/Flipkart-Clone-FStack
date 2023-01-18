//Fragment
import { styled, Box } from "@mui/material";

import React from "react";
import { useEffect } from "react";
import { getProductsAPI } from "../../Redux/actions/productAction";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidBanner from "./MidBanner";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #e9e2e2;
`;
const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.getProducts.products);

  // console.log(data);

  useEffect(() => {
    dispatch(getProductsAPI());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide data={data} title="Deal of the Day" timer={true} />
        <Slide data={data} title="Discounts for you" />
        <Slide data={data} title="Trending Items" />
        <MidBanner />
        <Slide data={data} title="Suggestion for you" />
        <Slide data={data} title="Top Deals on Accessories" />
        <Slide data={data} title="Recommendation for you" />
      </Component>
    </>
  );
};

export default Home;
