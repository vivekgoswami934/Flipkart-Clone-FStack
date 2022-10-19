import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Header = styled(Box)`
  padding: 15px 10px;
  background: #fff;
  border: 1px solid #fff;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 25px;
  background-color: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & h6{
    font-size: 22px;
  }
`;

const PriceTag = styled(Box)`
  float: right;
`

const TotalView = ({ totalItem }) => {
  console.log(totalItem);
  return (
    <div>
      <Box>
        <Header>
          <Heading>Price Details</Heading>
        </Header>
        <Container>
          <Typography>
            Price ({totalItem} item )  <PriceTag component="span"> ₹ 000 </PriceTag>
          </Typography>
          <Typography>
            Discount <PriceTag component="span"> ₹ 1000 </PriceTag>
          </Typography>
          <Typography>
            Delievry Charges <PriceTag component="span"> ₹ 000 </PriceTag>
          </Typography>
          <Typography variant="h6">
            Total Amount <PriceTag component="span"> ₹ 100 </PriceTag>
          </Typography>
          <Typography>You will save upto ₹100 </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default TotalView;
