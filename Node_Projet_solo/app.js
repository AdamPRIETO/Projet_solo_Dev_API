const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());

const PORT = 8080;

app.use(cors({ origin: "http://localhost:3000" }));

mongoose
  .connect("mongodb://localhost:27017/produit", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

const routes = require("./routes.js");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

