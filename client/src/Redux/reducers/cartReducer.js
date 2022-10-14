import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartAction";

const intialCartItems = {
  cartItems: [],
};

export const cartReducer = (state = intialCartItems, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const exist = state.cartItems.find((product) => product.id === item.id);

      if (exist) return { ...state, cartItems: [...state.cartItems, item] };
      else return { ...state, cartItems: [...state.cartItems, item] };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((product) => product.id !== payload),
      };

    default:
      return state;
  }
};
