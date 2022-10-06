const express = require("express");
const { userSignup } = require("../Controller/userController");

const router = express.Router();

router.post("/signup", userSignup);

module.exports = { router };
