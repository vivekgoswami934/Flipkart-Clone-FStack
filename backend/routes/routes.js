const express = require("express");
const { getProuducts } = require("../Controller/product-controller");
const { userSignup, userLogin } = require("../Controller/userController");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getProuducts);

module.exports = { router };
