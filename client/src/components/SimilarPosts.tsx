import PostGrid from "../components/PostGrid";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";

export default function SimilarPosts() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPosts() {
      setLoading(true);
      const data = await fetchPosts();
      if (data.error) {
        setError(data.error);
        setLoading(false);
      }
      setPost(data);
      setLoading(false);
    }
    getPosts();
  }, []);

  return (
    <PostGrid
      posts={posts.slice(0, 4)}
      loading={loading}
      grayBg={false}
      error={error}
      title="Read More"
    />
  );
}
