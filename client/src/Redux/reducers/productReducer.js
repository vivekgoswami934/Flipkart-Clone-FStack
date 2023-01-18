import {
  GET_PRODUCTS_DETAILS_FAILURE,
  GET_PRODUCTS_DETAILS_REQUEST,
  GET_PRODUCTS_DETAILS_RESET,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "../constants/actionType";

const homeProducts = {
  products: [],
};

export const getProductsReducer = (state = homeProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case GET_PRODUCTS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (
  state = { productDetails: {} },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        productDetails: action.payload,
      };
    case GET_PRODUCTS_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCTS_DETAILS_RESET: return {
      productDetails: { }
    }
    default : return state ;
  }
};
