import { Router } from "express";
import { getComments, postComment } from "../controllers/commentControllers.js";

const commentRouter = Router();

commentRouter.get("/:postId", getComments);
commentRouter.post("/", postComment);

export default commentRouter;
