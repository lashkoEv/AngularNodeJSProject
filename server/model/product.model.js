const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  country: String,
  wholesalePrice: String,
  retailPrice: String,
  count: String,
  fields: [],
  category: String,
  imgSrc: String,
});

const Product = mongoose.model("Products", productSchema);

module.exports = {
  Product,
};
