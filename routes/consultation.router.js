const express = require("express");

const consultationRouter = express.Router();

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../controller/consultation.controller");

consultationRouter.get("/consultations", getAll);
consultationRouter.post("/consultations", getById);
consultationRouter.post("/consultations/add", add);
consultationRouter.post("/consultations/delete", deleteById);
consultationRouter.post("/consultations/update", updateById);

module.exports = consultationRouter;
