import { Post } from "../models/post.js";

export async function getPosts(req, res) {
  const posts = await Post.find().populate({
    path: "author",
    select: "fullName",
  });
  res.json(posts);
}

export async function createPost(req, res) {
  const { title, content, category } = req.body;
  try {
    const newPost = await Post.create({
      title,
      content,
      author: req.user.id,
      category,
    });
    res.json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
