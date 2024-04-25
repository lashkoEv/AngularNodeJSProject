const express = require("express");

const userRouter = express.Router();

const { authorize, register } = require("../controller/user.controller");

userRouter.post("/auth", authorize);
userRouter.post("/register", register);

module.exports = userRouter;
