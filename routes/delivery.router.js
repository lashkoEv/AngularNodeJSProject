const express = require('express');

const deliveryRouter = express.Router();

const { getNovaPoshtaOffices } = require('../controller/delivery.controller');

deliveryRouter.get('/delivery/posts', getNovaPoshtaOffices);

module.exports = deliveryRouter;
