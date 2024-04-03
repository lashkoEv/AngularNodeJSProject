const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: String,
  description: String,
  imgSrc: String,
});

const Category = mongoose.model("Categories", categorySchema);

module.exports = {
  Category,
};
