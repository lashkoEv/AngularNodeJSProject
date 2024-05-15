const express = require("express");

const cartRouter = express.Router();

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../controller/cart.controller");

cartRouter.get("/cart", getAll);
cartRouter.post("/cart", getById);
cartRouter.post("/cart/add", add);
cartRouter.post("/cart/delete", deleteById);
cartRouter.post("/cart/update", updateById);

module.exports = cartRouter;
