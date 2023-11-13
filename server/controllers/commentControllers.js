import { Comment } from "../models/comment.js";
export async function getComments(req, res) {
  const comments = await Comment.find();
  res.json(comments);
}

export async function postComment(req, res) {
  const { message, postId, parent } = req.body;
  const comment = await Comment.create({ message, postId, parent });
  res.json(comment);
}
