const { CartModel } = require("../Models/cartSchema");
const { ProductModel } = require("../Models/productSchema");

const addToCartInMonogo = async (req, res) => {
  console.log("addtocart backned");

  try {

    const cart = await new CartModel(req.body.data);
    console.log("cart added");
    cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log("error while adding data in cart in backend", error.message);
  }
};

const getCartData = async (req, res) => {
  console.log(req.body);
  try {
    const data = await CartModel.find({ username: req.body });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log("error is here");
    console.log(error.message);
  }
};

const deleteFromCart = (req, res) => {
  try {
  } catch (error) { }
};

module.exports = { addToCartInMonogo, deleteFromCart, getCartData };
