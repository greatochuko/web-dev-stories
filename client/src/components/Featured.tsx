import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";
import { PostType } from "./Post";

export default function Featured() {
  const [posts, setPost] = useState<PostType[]>([]);

  useEffect(() => {
    async function getPosts() {
      const data = await fetchPosts();
      setPost(data);
    }
    getPosts();
  }, []);
  return (
    <section className="w-full py-4 px-[5%] md:px-[10%] text-zinc-700 mb-8">
      <div className="gap-2 flex relative aspect-[1.5] md:aspect-[2] max-w-7xl mx-auto ">
        {posts.slice(0, 3).map((post) => (
          <Link
            to={`/post/${post._id}`}
            key={post._id}
            className="bg-black h-full w-full top-0 left-0 absolute overflow-hidden rounded-md"
          >
            <img
              src={post.banner}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="flex flex-col gap-2 text-white bg-black/50 absolute top-0 left-0 w-full h-full px-8 md:px-12 py-4 md:py-12 justify-end">
              <p>{post.category}</p>
              <h2 className="text-base md:text-2xl font-semibold">
                {post.title}
              </h2>
              <p>{new Date(post.createdAt).toDateString()}</p>
              <div className="flex gap-2 items-center">
                <div className="w-10 aspect-square bg-zinc-500 rounded-full"></div>
                <h3>{post.author.fullName}</h3>
              </div>
            </div>
          </Link>
        ))}
        <button className="text-zinc-300 hover:text-white absolute left-0 h-full flex items-center justify-center w-8 md:w-12 from-black/50 to-transparent text-2xl font-bold hover:bg-gradient-to-r ">
          <i className="fa-solid fa-caret-left"></i>
        </button>
        <button className="text-zinc-300 hover:text-white absolute right-0 h-full flex items-center justify-center w-8 md:w-12 from-black/50 to-transparent text-2xl font-bold hover:bg-gradient-to-l ">
          <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
    </section>
  );
}
