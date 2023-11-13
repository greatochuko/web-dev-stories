import { User } from "../models/user.js";

export async function authenticateUser(req, res) {
  const user = await User.findById(req.userId);
  res.json(user);
}

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.userId)
      .select("-password")
      .populate({
        path: "posts",
        select: "comments title content author reads category",
        populate: { path: "author", select: "fullName" },
      });
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}
