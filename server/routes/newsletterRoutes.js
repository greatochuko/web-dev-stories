import { Router } from "express";
import { createNewSubscriber } from "../controllers/newsletterControllers.js";

const newsletterRouter = Router();

newsletterRouter.post("/", createNewSubscriber);

export default newsletterRouter;
