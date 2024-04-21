const mongoose = require("mongoose");

const callRequestSchema = mongoose.Schema({
  name: String,
  phone: String,
  //   status: String,
});

const CallRequest = mongoose.model("CallRequests", callRequestSchema);

module.exports = {
  CallRequest,
};
