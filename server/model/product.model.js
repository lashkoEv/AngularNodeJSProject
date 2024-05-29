const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  // availability: String,
  // country: {},
  wholesalePrice: String,
  retailPrice: String,
  count: String,
  fields: [{}],
  category: {},
  imgSrc: String,
});

const Product = mongoose.model("Products", productSchema);

module.exports = {
  Product,
};
