import axios from "axios";
import {
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

// {  return value
//     config:{},
//     data : [],   <----
//     headers : {},
//     status : 200 ,
//     message : ``
// }
