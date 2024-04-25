const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product: String,
  count: Number,
});

const Cart = mongoose.model("Carts", cartSchema);

module.exports = {
  Cart,
};
