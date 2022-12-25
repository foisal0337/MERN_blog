const express = require("express");
const categoryRouter = express.Router();

const {postCategories , getCategories} = require("../controllers/categories-controller");

categoryRouter.post("/",postCategories)
categoryRouter.get("/",getCategories)

module.exports = categoryRouter;