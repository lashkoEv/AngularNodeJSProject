const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  country: String,
  price: Number,
  count: Number,
  fields: String,
  category: String,
  imgSrc: String,
});

const Product = mongoose.model("Products", productSchema);

module.exports = {
  Product,
};
