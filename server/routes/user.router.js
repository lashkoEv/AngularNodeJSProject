const express = require("express");

const userRouter = express.Router();

const {
  authorize,
  register,
  changePassword,
} = require("../controller/user.controller");

userRouter.post("/auth", authorize);
userRouter.post("/register", register);
userRouter.post("/user/update", changePassword);

module.exports = userRouter;
