import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
} from "../controllers/postControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.post("/", authenticate, createPost);
postRouter.get("/:postId", getPost);

export default postRouter;
