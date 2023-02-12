import { Alert, Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
// or
import { Snackbar } from '@mui/material';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartData } from "../../Redux/actions/cartAction";
import { payUsingPaytmAPI } from "../../service/api";

const LeftItem = ({ product }) => {
  const [success,setSuccess ] = useState(false)
  const [fail,setFail ] = useState(false)
  const [loginFail,setLoginFail ] = useState(false)
  const {cart} = useSelector(state => state )
  const dispatch = useDispatch();
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
   
  });


  const { id } = product;

  const addItemToCart = () => {
    console.log("ccv",cart.cartItems)

    //  Please login

    if(cart.cartItems === "Please login" ||cart.cartItems?.length === 0 ){
      setLoginFail(true)
      handleClick()
      setTimeout(()=>{
        setLoginFail(false)
        handleClose()
      },3000)

       return
    }

    const getting =  cart?.cartItems?.find((el) => el.id === id)
    console.log(getting)


    if(getting){
      setFail(true)
      handleClick()
      setTimeout(()=>{
        setFail(false)
        handleClose()
      },3000)
      }else{
        dispatch(addToCart(id)).then(()=>(
          dispatch(getCartData())
        )).then(() => setSuccess(true)).then(()=> setTimeout(()=> setSuccess(false),3000))

      }
  };
/////////////////////////////////////////////////

const { vertical, horizontal } = state;

const handleClick = (newState) => () => {
  setState({ open: true, ...newState });
};

const handleClose = () => {
  setState({ ...state, open: false });
};
/////////////////////////////////////////////////
  

  const buyNow = () => {
    payUsingPaytmAPI()
  }


  return (
    <LeftContainer>
      <Box style={{padding: "15px 20px", border: "0.5px solid #f0f0f0",width: "90%",}}>
        <Image src={product?.detailUrl} alt="bigpicture" />
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
      <Snackbar open={success} >
        <ColorAlert severity="success" sx={{ width: '100%' }}>
           Item added in cart successfully!!!
        </ColorAlert>
      </Snackbar>
      <Snackbar open={fail} anchorOrigin={{ vertical, horizontal }}>
        <ColorAlertError  severity="error" sx={{ width: '100%' }}    >
          Item alredy added in cart!!!
        </ColorAlertError>
      </Snackbar>
      <Snackbar open={loginFail} anchorOrigin={{ vertical, horizontal }}>
        <ColorAlertError  severity="error" sx={{ width: '100%' }}    >
          PLEASE LOGIN !!!!  You have not login yet...
        </ColorAlertError>
      </Snackbar>
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
  width: "46%",
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
const ColorAlert = styled(Alert)(({ theme }) => ({
 backgroundColor : "green",
 color : "white"
}));
const ColorAlertError = styled(Alert)(({ theme }) => ({
 backgroundColor : "orange",
 color : "white"
}));

export default LeftItem;
