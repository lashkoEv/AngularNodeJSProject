const express = require("express");

const productRouter = express.Router();

const { getAll, getById, add } = require("../controller/product.controller");

productRouter.get("/products", getAll);
productRouter.post("/products", getById);
productRouter.post("/products/add", add);

module.exports = productRouter;
