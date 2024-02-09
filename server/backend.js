const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", (req, res, next) => {
  res.send({
    hello: "Hello World!",
  });
});

module.exports = app;
