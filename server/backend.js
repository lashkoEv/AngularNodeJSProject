const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const productRouter = require("./routes/product.router");
const categoryRouter = require("./routes/category.router");
const userRouter = require("./routes/user.router");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connect();

app.use("", productRouter);
app.use("", categoryRouter);
app.use("", userRouter);

app.use("/", (req, res) => {
  return res.json({
    msg: "Hello server",
  });
});

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://dbMichael:XLkfFEF4vHbXESex@cluster0.rr2pz7s.mongodb.net/InterPlastService?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (e) {
    console.log("[e.message]", e.message);
  }
}

module.exports = {
  app,
};
