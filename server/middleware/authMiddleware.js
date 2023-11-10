import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export async function authenticate(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const userId = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(userId);
    next();
  } catch (err) {
    res.json({ error: err.message });
  }
}
