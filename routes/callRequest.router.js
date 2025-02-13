const express = require("express");

const callRequestRouter = express.Router();

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../controller/callRequest.controller");

callRequestRouter.get("/callRequests", getAll);
callRequestRouter.post("/callRequests", getById);
callRequestRouter.post("/callRequests/add", add);
callRequestRouter.post("/callRequests/delete", deleteById);
callRequestRouter.post("/callRequests/update", updateById);

module.exports = callRequestRouter;
