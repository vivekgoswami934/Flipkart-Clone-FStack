import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

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
  borderRadius: 2,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

const LeftItem = ({ product }) => {
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
          variant="contained"
          style={{ marginRight: 14, background: "#ff9f00" }}
        >
          <ShoppingCartIcon />
          Add to cart
        </StyledButton>
        <StyledButton variant="contained" style={{ background: "#fb541b" }}>
          <FlashOnIcon />
          Buy Now
        </StyledButton>
      </Box>
    </LeftContainer>
  );
};

export default LeftItem;
