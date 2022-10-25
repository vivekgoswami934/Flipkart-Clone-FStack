const express = require("express");
const app = express()
const { authentication } = require("../authentication/authentication");
const { addToCartInMonogo, deleteFromCart, getCartData } = require("../Controller/cart-Controller");
const { getProuducts , getProuductsById } = require("../Controller/product-controller");
const { userSignup, userLogin } = require("../Controller/userController");
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProuducts);
router.get("/product/:id", getProuductsById);

//authentication
// console.log("Before auth")
// app.use(authentication)
// console.log("after auth")

// cart 
router.get("/cart" , authentication , getCartData)
router.post("/cart", authentication , addToCartInMonogo)
router.delete("/cart/:id", authentication, deleteFromCart)

module.exports = { router };
