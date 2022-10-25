import { Box, Button, styled, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import ButtonGroups from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/actions/cartAction";

const CartItem = ({ item }) => {
  console.log("cartItem", item.data);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Component>
      <LeftComponet>
        {<img src={item.url} style={{ height: 120, width: 120 }} />}
        <ButtonGroups />
      </LeftComponet>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt=""
              style={{ width: "60px", marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography>
          <Box component="span" style={{ fontSize: 18, fontWeight: 600 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;
          <Box component="span" style={{ color: "#388e3c" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <RemoveButton
          color="warning"
          variant="contained"
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove
        </RemoveButton>
      </Box>
    </Component>
  );
};

const Component = styled(Box)`
  /* border-top: 2px solid black; */
  display: flex;
  background-color: white;
`;

const LeftComponet = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const SmallText = styled(Typography)`
  color: #878787;
  margin-left: 10px;
  font-size: 14px;
`;

const RemoveButton = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
`;

export default CartItem;
