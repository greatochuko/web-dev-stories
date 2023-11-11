import Featured from "../components/Featured";
import NewsLetter from "../components/NewsLetter";
import PostGrid from "../components/PostGrid";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";

export default function HomePage() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const data = await fetchPosts();
      setPost(data);
    }
    getPosts();
  }, []);

  return (
    <main className="flex flex-col ">
      <Featured />
      <NewsLetter />
      <PostGrid posts={posts} title="Latest" url="/search/?q=&sortBy=latest" />
      <PostGrid
        posts={posts}
        title="Popular"
        url="/search/?q=&sortBy=popular"
      />
    </main>
  );
}
