import { Post } from "../models/post.js";

export async function searchPosts(req, res) {
  const searchQuery = req.query.q;
  try {
    const posts = await Post.find();
    const searchedPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.json(searchedPosts);
  } catch (err) {
    res.json({ error: err.message });
  }
}
