import Featured from "../components/Featured";
import NewsLetter from "../components/NewsLetter";
import PostGrid from "../components/PostGrid";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";
import { Post } from "../components/Post";

export default function HomePage() {
  const [posts, setPost] = useState<Post[]>([]);
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

  const latestPosts = posts
    .map((a) => a)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const popularPosts = posts.map((a) => a).sort((a, b) => b.reads - a.reads);

  return (
    <main className="flex flex-col ">
      <Featured />
      <NewsLetter />
      <div className="p-[5%] md:px-[10%] bg-zinc-100">
        <PostGrid
          posts={latestPosts.slice(0, 4)}
          loading={loading}
          title="Latest"
          url="/search/?q=&sortBy=latest"
        />
        <PostGrid
          posts={popularPosts.slice(0, 4)}
          loading={loading}
          title="Popular"
          url="/search/?q=&sortBy=popular"
        />
      </div>
    </main>
  );
}
