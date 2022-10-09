const express = require("express");
const { getProuducts , getProuductsById } = require("../Controller/product-controller");
const { userSignup, userLogin } = require("../Controller/userController");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProuducts);
router.get("/product/:id", getProuductsById);

module.exports = { router };
