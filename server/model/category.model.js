const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  title: String,
  description: String,
  imgSrc: String,
  categoryUA: {},
});

const Category = mongoose.model('Categories', categorySchema);

module.exports = {
  Category,
};
