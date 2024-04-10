const express = require("express");

const productRouter = express.Router();

const {
  getAll,
  getById,
  getByCategory,
  add,
  deleteById,
  updateById,
  getByCategory,
} = require("../controller/product.controller");

productRouter.get("/products", getAll);
productRouter.post("/products", getById);
productRouter.post("/products/category", getByCategory);
productRouter.post("/products/add", add);
productRouter.post("/products/delete", deleteById);
productRouter.post("/products/update", updateById);
productRouter.post("/products/category", getByCategory);

module.exports = productRouter;
