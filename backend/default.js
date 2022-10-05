const { products } = require("./constants/data");
const { ProductModel } = require("./Models/productSchema");

const DefaultData = async () => {
  try {
    console.log(products)
    await ProductModel.deleteMany({})
      const data =  await ProductModel.insertMany( products );
      console.log(data)
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("error while inserting default data", error.message);
  }
};

module.exports = { DefaultData };
