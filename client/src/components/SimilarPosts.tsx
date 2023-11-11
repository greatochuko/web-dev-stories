import PostGrid from "../components/PostGrid";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";

export default function SimilarPosts() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      const data = await fetchPosts();
      setPost(data);
      setLoading(false);
    }
    getPosts();
  }, []);

  return (
    <PostGrid
      posts={posts}
      loading={loading}
      grayBg={false}
      title="Read More"
    />
  );
}
