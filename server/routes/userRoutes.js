import { Router } from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { authenticateUser, getUser } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.get("/", authenticate, authenticateUser);
userRouter.get("/profile/:userId", getUser);

export default userRouter;
