const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: String,
  password: String,
});

const User = mongoose.model("Users", userSchema);

module.exports = {
  User,
};
