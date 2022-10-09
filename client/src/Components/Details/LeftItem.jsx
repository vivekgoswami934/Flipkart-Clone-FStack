import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled("img")({
    width:"95%",
  padding: "15px",
});

const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 6px;
`;

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
    </LeftContainer>
  );
};

export default LeftItem;
