const express = require("express");
const { Connection } = require("./database/db");
const { DefaultData } = require("./default");
const { router } = require("./routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

app.use("/", router);

Connection();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  

DefaultData();
