const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  id: String,
  nameAndLastName: String,
  phoneNumber: String,
  city: {},
  email: String,
  message: String,
  typeOfDelivery: {},
  deliveryAddress: {},
  cart: {},
  status: String,
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = {
  Order,
};
