const express = require("express");

const orderRouter = express.Router();

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../controller/order.controller");

orderRouter.get("/order", getAll);
orderRouter.post("/order", getById);
orderRouter.post("/order/add", add);
orderRouter.post("/order/delete", deleteById);
orderRouter.post("/order/update", updateById);

module.exports = orderRouter;
