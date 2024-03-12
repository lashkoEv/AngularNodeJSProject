const express = require("express");

const productRouter = express.Router();

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../controller/product.controller");

productRouter.get("/products", getAll);
productRouter.post("/products", getById);
productRouter.post("/products/add", add);
productRouter.post("/products/delete", deleteById);
productRouter.post("/products/update", updateById);

module.exports = productRouter;
