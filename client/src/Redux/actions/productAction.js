import axios from "axios";
import {
  GET_PRODUCTS_DETAILS_FAILURE,
  GET_PRODUCTS_DETAILS_REQUEST,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "../constants/actionType";

const URL = "http://localhost:8000";

export const getProductsAPI = () => async (dispatch) => {
  //  console.log("action getproduct calling")
  try {
    const { data } = await axios.get(`${URL}/products`);
    //   console.log(data)
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error while calling getProducts at action", error.message);
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProudctsDetails = (id) => async (dispatch) => {
  console.log("called at frontend")
  try {
    dispatch({ type: GET_PRODUCTS_DETAILS_REQUEST });
    const { data } = await axios.get(`${URL}/product/${id}`);
    console.log("data", data)
    dispatch({ type: GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_DETAILS_FAILURE, payload: error.message });
  }
};

// {  return value
//     config:{},
//     data : [],   <----
//     headers : {},
//     status : 200 ,
//     message : ``
// }
