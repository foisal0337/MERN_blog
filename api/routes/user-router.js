const express = require("express");
const userRouter = express.Router(); 

const {updateUser , deleteUser , getByUser } = require('../controllers/user-controller');

userRouter.put("/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.get("/:id",getByUser)

module.exports = userRouter;