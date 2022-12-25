const express = require("express");
const postRouter = express.Router();

const {createPost,updatePost,deletePost,getPostById,getAllPost} = require('../controllers/post-controller');

postRouter.post("/",createPost)
postRouter.put("/:id",updatePost)
postRouter.delete("/:id",deletePost)
postRouter.get("/:id", getPostById)
postRouter.get("/", getAllPost)

module.exports = postRouter;
