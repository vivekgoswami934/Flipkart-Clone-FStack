import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
  & h6 {
    font-size: 22px;
  }
`;

const PriceTag = styled(Box)`
  float: right;
`;
const DiscountTag = styled(Typography)`
  color: green;
  font-weight: 520;
  margin-top: 10px;
`;

const TotalView = ({ totalItem, data }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  console.log(totalItem);

  useEffect(() => {
    totalAmount();
  }, [data]);

  function totalAmount() {
    // console.log(totalItem)
    let price = 0,
      discount = 0;
    data.forEach((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  }

  return (
    <div>
      <Box>
        <Header>
          <Heading>Price Details</Heading>
        </Header>
        <Container>
          <Typography>
            Price ({totalItem} item )
            <PriceTag component="span"> ₹{price} </PriceTag>
          </Typography>
          <Typography>
            Discount <PriceTag component="span"> ₹{discount} </PriceTag>
          </Typography>
          <Typography>
            Delievry Charges <PriceTag component="span"> ₹40 </PriceTag>
          </Typography>
          <Typography variant="h6">
            Total Amount{" "}
            <PriceTag component="span"> ₹ {price - discount + 40} </PriceTag>
          </Typography>
          <DiscountTag>You will save upto ₹{discount - 40} </DiscountTag>
        </Container>
      </Box>
    </div>
  );
};

export default TotalView;
