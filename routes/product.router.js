const express = require('express');

const productRouter = express.Router();

const {
  getAll,
  getById,
  getByCategory,
  add,
  deleteById,
  updateById,
  addFavorite,
  deleteFavoriteById,
  getAllFavorite,
} = require('../controller/product.controller');

productRouter.get('/products', getAll);
productRouter.post('/products', getById);
productRouter.post('/products/category', getByCategory);
productRouter.post('/products/add', add);
productRouter.post('/products/delete', deleteById);
productRouter.post('/products/update', updateById);
productRouter.get('/favorite', getAllFavorite);
productRouter.post('/products/favorite/add', addFavorite);
productRouter.post('/products/favorite/delete', deleteFavoriteById);

module.exports = productRouter;
