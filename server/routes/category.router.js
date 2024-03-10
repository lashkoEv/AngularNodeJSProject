const express = require("express");

const categoryRouter = express.Router();

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../controller/category.controller");

categoryRouter.get("/categories", getAll);
categoryRouter.post("/categories", getById);
categoryRouter.post("/categories/add", add);
categoryRouter.post("/categories/delete", deleteById);
categoryRouter.post("/categories/update", updateById);

module.exports = categoryRouter;
