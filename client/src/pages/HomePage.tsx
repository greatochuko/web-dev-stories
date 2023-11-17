import Featured from "../components/Featured";
import NewsLetter from "../components/NewsLetter";
import PostGrid from "../components/PostGrid";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";
import { PostType } from "../components/Post";
import toast from "react-hot-toast";

export default function HomePage() {
  const [posts, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPosts() {
      setLoading(true);

      const data = await fetchPosts();
      if (data.error) {
        setError(data.error);
        toast.error("An error occured fetching posts");
        return;
      }
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
      <Featured posts={posts} error={error} loading={loading} />
      <NewsLetter />
      <div className="p-[5%] md:px-[10%] bg-zinc-100">
        <PostGrid
          posts={latestPosts.slice(0, 4)}
          loading={loading}
          error={error}
          title="Latest"
          url="/search/?q=&sortBy=latest"
        />
        <PostGrid
          posts={popularPosts.slice(0, 4)}
          loading={loading}
          error={error}
          title="Popular"
          url="/search/?q=&sortBy=popular"
        />
      </div>
    </main>
  );
}
