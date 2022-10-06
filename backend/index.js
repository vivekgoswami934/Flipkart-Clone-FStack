const express = require("express");
const { Connection } = require("./database/db");
const { DefaultData } = require("./default");
const app = express();
app.use(express.json());

const PORT = 8000;  

Connection();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

DefaultData();
