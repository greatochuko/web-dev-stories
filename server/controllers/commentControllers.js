import { Comment } from "../models/comment.js";
import { Post } from "../models/post.js";

export async function getComments(req, res) {
  try {
    const comments = await Comment.find({ post: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function postComment(req, res) {
  const { message, postId, parent } = req.body;
  try {
    const comment = await Comment.create({ message, post: postId, parent });
    const post = await Post.findById(postId);
    post.comments.push(comment._id);
    await post.save();
    const comments = await Comment.find({ post: postId });
    res.json(comments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
