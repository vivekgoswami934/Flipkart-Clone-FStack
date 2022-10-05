const mongoose = require("mongoose");

require("dotenv").config();

const Connection = async () => {
  const URL = process.env.MONGO_DB_URL;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database is connected successfully");
  } catch (error) {
    console.log("Error while connecting with db", error.message);
  }
};

module.exports = { Connection };
