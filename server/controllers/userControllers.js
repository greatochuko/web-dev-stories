import { User } from "../models/user.js";

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.userId);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}
