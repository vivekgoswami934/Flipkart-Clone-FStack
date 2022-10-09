import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//npm i redux
//npm i react-redux  --> wrapping
//npm i redux-devtools-extension
//npm i redux-thunk  --> middleware
