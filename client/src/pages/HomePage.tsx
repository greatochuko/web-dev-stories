import Featured from "../components/Featured";
import NewsLetter from "../components/NewsLetter";
import PostGrid from "../components/PostGrid";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";

export default function HomePage() {
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
    <main className="flex flex-col ">
      <Featured />
      <NewsLetter />
      <PostGrid
        posts={posts}
        loading={loading}
        title="Latest"
        url="/search/?q=&sortBy=latest"
      />
      <PostGrid
        posts={posts}
        loading={loading}
        title="Popular"
        url="/search/?q=&sortBy=popular"
      />
    </main>
  );
}
