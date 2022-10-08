import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "../constants/actionType";

const homeProducts = {
  products: []
};

export const getProductsReducer = (state = homeProducts, action) => {
//   console.log(action.payload);
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload };

    case GET_PRODUCTS_FAIL:
      return { error: action.paylaod };

    default:
      return state;
  }
};
