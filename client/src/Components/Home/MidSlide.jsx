import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Container = styled(Box)`
  display: flex;
`;
const LeftBox = styled(Box)(({ theme }) => ({
  /* flex: 9; */
  width: "82%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  /* flex: 1; */
  width: "16%",
  background: " #ffffff",
  padding: "5px",
  marginTop: "10px",
  marginLeft: "10px",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ data, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Container>
      <LeftBox>
        <Slide data={data} title={title} timer={timer} />
      </LeftBox>
      <RightBox>
        <img src={adURL} alt="ADblock" width={"217px"} />
      </RightBox>
    </Container>
  );
};

export default MidSlide;
