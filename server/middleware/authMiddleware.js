import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export async function authenticate(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    req.userId = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.json({ error: err.message });
  }
}
