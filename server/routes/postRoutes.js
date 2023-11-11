import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  editPost,
  deletePost,
} from "../controllers/postControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.post("/", authenticate, createPost);
postRouter.get("/:postId", getPost);
postRouter.put("/:postId", editPost);
postRouter.delete("/:postId", deletePost);

export default postRouter;
