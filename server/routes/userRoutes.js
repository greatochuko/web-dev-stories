import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { getUser } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get("/", authenticate, getUser);

export default userRouter;
