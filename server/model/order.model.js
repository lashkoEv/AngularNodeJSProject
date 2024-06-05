const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  nameAndLastName: String,
  phoneNumber: String,
  city: {},
  email: String,
  message: String,
  typeOfDelivery: {},
  deliveryAddress: {},
  cart: {},
});

const Order = mongoose.model("Orders", orderSchema);

module.exports = {
  Order,
};
