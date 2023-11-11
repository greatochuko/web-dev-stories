import { Comment } from "../models/comment.js";
export async function getComments(req, res) {
  const comments = await Comment.find();
  res.json(comments);
}
