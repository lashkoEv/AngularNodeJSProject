const express = require("express");

const userRouter = express.Router();

const { authorize } = require("../controller/user.controller");

userRouter.post("/auth", authorize);

module.exports = userRouter;
