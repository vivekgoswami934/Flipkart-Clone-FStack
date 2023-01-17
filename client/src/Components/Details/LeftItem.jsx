import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartData } from "../../Redux/actions/cartAction";
import { payUsingPaytmAPI } from "../../service/api";
import { useEffect } from "react";

const LeftItem = ({ product }) => {
  // const navigate = useNavigate();
  const {cart} = useSelector(state => state )
  const dispatch = useDispatch();

  // const [quantity, setQuantity] = useState(1);

  const { id } = product;

  const addItemToCart = () => {
    console.log("ccv",cart.cartItems)
    const getting = cart.cartItems.data > 0 &&  cart?.cartItems?.find((el) => el.id === id)
    console.log("prajwal" , cart,getting)
    if(getting){
      alert("data is already presesnt")
      }else{
        dispatch(addToCart(id)).then(()=>(
          dispatch(getCartData())
        ))

      }

    
    // navigate("/cart");
  };

  

  const buyNow = () => {
    payUsingPaytmAPI()
  }
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "0.5px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="bigpicture" />
      </Box>
      <Box>
        <StyledButton
          onClick={() => addItemToCart()}
          variant="contained"
          style={{ marginRight: 14, background: "#ff9f00" }}
        >
          <ShoppingCartIcon />
          Add to cart
        </StyledButton>
        <StyledButton variant="contained" style={{ background: "#fb541b" }}   onClick={() => buyNow() }  >
          <FlashOnIcon />
          Buy Now
        </StyledButton>
      </Box>
    </LeftContainer>
  );
};

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  width: "95%",
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 45,
  borderRadius: 8,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
  marginTop: "2%",
}));

export default LeftItem;
