import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "../constants/cartAction";

// const URL = `http://localhost:8000`;
const URL = `https://calm-blue-bull-tutu.cyclic.app`;

// const token = localStorage.getItem("flipKartToken");
// console.log(token);

export const addToCart = (id, quantity) => async (dispatch) => {
  const token = localStorage.getItem("flipKartToken");
  console.log(token);
  try {
    const data = await axios.get(`${URL}/product/${id}`);
         delete data["data"]['_id'];
    const response = await axios.post(`${URL}/cart`, data,
      {
        headers: {
          authorization: `Bearer ${token}`, //post
        },
      }
    );
    console.log("cv" , response)

    const allCartData = await axios.get(`${URL}/cart`, {
      headers: {
        authorization: `Bearer ${token}`, //..get
      },
    });

    console.log(allCartData);

    dispatch({ type: ADD_TO_CART, payload: { ...allCartData, quantity } });
  } catch (err) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: err.message });
    console.log("error at addToCart in cartAction", err.message);
  }
};
// getCartData

export const getCartData = () => async (dispatch) => {
  // console.log(3.5)
  const token = localStorage.getItem("flipKartToken");
  // console.log(token);
  const allCartData = await axios.get(`${URL}/cart`, {
    headers: {
      authorization: `Bearer ${token}`, //..get
    },
  });
  dispatch({ type: ADD_TO_CART, payload: allCartData.data });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};



export const getCartDataFirst = (tokens) => async (dispatch) => {
  console.log(3.5)
  const allCartData = await axios.get(`${URL}/cart`, {
    headers: {
      authorization: `Bearer ${tokens}`, //..get
    },
  });

  // console.log(allCartData);

  dispatch({ type: ADD_TO_CART, payload: allCartData.data });
};


export const makeEmptyCartData = () => (dispatch) => {
  console.log("Empty action")
  dispatch({ type: EMPTY_CART});

}