import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_FROM_CART,
} from "../constants/cartAction";

const URL = `http://localhost:8000`;

const token = localStorage.getItem("flipKartToken")
console.log(token)

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
        console.log(data)
        console.log(token)
    const response = await axios.post(`${URL}/cart`, {data} , {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
     {console.log("vivek add to cart")}
    {console.log(response)}

    const allCartData = await axios.get(`${URL}/cart` , {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    console.log(allCartData)

    dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
  } catch (err) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: err.message });
    console.log("error at addToCart in cartAction", err.message);
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
