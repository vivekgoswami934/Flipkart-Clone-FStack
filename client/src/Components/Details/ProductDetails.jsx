import React from "react";
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { fontSize } from "@mui/system";

const ProductDetails = ({ productDetails }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const currentDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{productDetails.title.longTitle}</Typography>
      <Typography>
        & Rating & 1 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{productDetails.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{productDetails.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {productDetails.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallerText>
        <Typography>
          <StyledBadge /> 5% Cashback on Flipkart Axis Bank CardT&C
        </Typography>
        <Typography>
          <StyledBadge /> Sign up for Flipkart Pay Later and get Flipkart Gift
          Card worth upto ₹1000 * Know More
        </Typography>
        <Typography>
          <StyledBadge /> Buy this product and get upto ₹500 off on Flipkart
          FurnitureKnow More
        </Typography>
        <Typography>
          <StyledBadge />
          EMI starting from ₹309/month View Plans
        </Typography>
        <Typography>
          <StyledBadge /> Pay Later and get Flipkart Gift Card worth upto ₹5000
          * Know More
        </Typography>
      </SmallerText>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {currentDate.toDateString()} | "₹40
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell style={{ fontWeight: 600 }}>No Warranty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              <Box component="span" style={{ color: "#2f6cce" }}>
                SuperComNet
              </Box>
              <Typography>GST Invoice Email availbale </Typography>
              <Typography>
                Few more seller starting from ₹{productDetails.price.cost - 46}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
                 <img src={adURL}  style={{width : 390}} alt="flipkartpoints" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{ fontWeight: 700 }}>{productDetails.description}</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </>
  );
};

const SmallerText = styled(Box)`
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #038b03;
  font-size: 15px;
`;

export default ProductDetails;
