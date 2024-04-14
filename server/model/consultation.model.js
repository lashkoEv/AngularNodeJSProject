const mongoose = require("mongoose");

const consultationSchema = mongoose.Schema({
  email: String,
  topic: String,
  message: String,
});

const Consultation = mongoose.model("Consultations", consultationSchema);

module.exports = {
  Consultation,
};
