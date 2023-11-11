import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";

export default function Featured() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const data = await fetchPosts();
      setPost(data);
    }
    getPosts();
  }, []);
  return (
    <section className="p-4 w-full  text-zinc-700 max-w-7xl sm:w-[90%] mx-auto mb-8">
      <h1 className="mb-4 text-2xl font-bold">Featured Blog Posts</h1>
      <div className="grid w-full gap-8 md:grid-cols-2">
        {posts.map((_, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 ${
              i === 0
                ? "sm:col-span-2 xl:col-span-1 xl:row-span-2"
                : "xl:flex-row"
            }`}
          >
            <div
              className={`bg-zinc-400  rounded-md aspect-video ${
                i !== 0 ? "xl:aspect-square" : ""
              }`}
            ></div>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-2 text-base">
                <p className="px-2 py-1 rounded-sm bg-zinc-200 ">React</p>
                <p className="font-semibold">5 min read</p>
              </div>
              <h2 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet, adipisicing elit. Rerum, pariatur?
              </h2>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                earum corrupti consequunt...
              </p>
              <Link
                className="text-base w-fit text-zinc-900 hover:underline"
                to={"/post/lorem"}
              >
                Read More &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
