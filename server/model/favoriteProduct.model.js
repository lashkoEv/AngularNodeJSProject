const mongoose = require('mongoose');

const favoriteProductSchema = new mongoose.Schema({
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
});

const Favorite = mongoose.model('FavoriteProducts', favoriteProductSchema);

module.exports = Favorite;
