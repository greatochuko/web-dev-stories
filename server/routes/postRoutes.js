import { Router } from "express";
import { createPost, getPosts } from "../controllers/postControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const postRouter = Router();

postRouter.get("/", getPosts);

postRouter.post("/", authenticate, createPost);

export default postRouter;
