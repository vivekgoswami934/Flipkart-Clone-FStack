

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  data : Object 
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };



// {
//   id: String,
//   url: String,
//   detailUrl: String,
//   title: Object,
//   price: Object,
//   quantity: Number,
//   description: String,
//   discount: String,
//   tagline: String,
// }