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

export async function getPost(req, res) {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post)
      throw new Error(`Post with id ${req.params.postId} does not exist`);
    res.json(post);
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId")
      return res
        .status(404)
        .json({ error: `Post with id ${req.params.postId} does not exist` });
    res.status(400).json({ error: err });
  }
}
