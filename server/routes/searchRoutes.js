import { Router } from "express";
import { searchPosts } from "../controllers/searchControllers.js";

const searchRouter = Router();

searchRouter.get("/", searchPosts);

export default searchRouter;
