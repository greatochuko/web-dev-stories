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
postRouter.put("/:postId", authenticate, editPost);
postRouter.delete("/:postId", authenticate, deletePost);

export default postRouter;
