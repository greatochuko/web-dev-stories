import { Post } from "../models/post.js";
import { User } from "../models/user.js";

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
      author: req.userId,
      category,
    });
    await User.findByIdAndUpdate(req.userId, { $push: { posts: newPost._id } });
    res.json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getPost(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      { $inc: { reads: 1 } },
      { new: true }
    ).populate({
      path: "author",
      select: "fullName",
    });
    res.json(post);
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId")
      return res
        .status(404)
        .json({ error: `Post with id ${req.params.postId} does not exist` });

    res.status(400).json({ error: err.message });
  }
}

export async function editPost(req, res) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.postId, req.body, {
      new: true,
    });
    res.json(post);
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId")
      return res
        .status(404)
        .json({ error: `Post with id ${req.params.postId} does not exist` });
    res.status(400).json({ error: err });
  }
}

export async function deletePost(req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.json(post);
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId")
      return res
        .status(404)
        .json({ error: `Post with id ${req.params.postId} does not exist` });
    res.status(400).json({ error: err });
  }
}
