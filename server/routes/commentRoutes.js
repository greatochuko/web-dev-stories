import { Router } from "express";
import { getComments, postComment } from "../controllers/commentControllers.js";
import { authenticate } from "../middleware/authMiddleware.js";

const commentRouter = Router();

commentRouter.get("/:postId", getComments);
commentRouter.post("/", authenticate, postComment);

export default commentRouter;
