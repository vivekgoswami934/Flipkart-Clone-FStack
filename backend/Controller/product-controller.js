const { ProductModel } = require("../Models/productSchema");

const getProuducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProuductsById = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

module.exports = { getProuducts, getProuductsById };
