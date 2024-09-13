const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: String,
  title: String,
  description: String,
  availability: {},
  // country: {},
  wholesalePrice: String,
  retailPrice: String,
  count: String,
  fields: [{}],
  category: {},
  imgSrc: String,
  productUA: {},
});

const Product = mongoose.model('Products', productSchema);

module.exports = {
  Product,
};
