const axios = require("axios");
const express = require("express");
const app = express();
const cors = require('cors')
const config = require("./config");
require("dotenv").config();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, 
};

app.get("/", (request, response) => {
  response.send("Go to /api/products to view products");
});
app.get("/api/products",cors(corsOptions), async (request, response) => {
  let data1 = await axios.get(config.products("products"));
  let data2 = await axios.get(config.products("images"));
  response.send({ products: data1.data.products, images: data2.data.images });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
