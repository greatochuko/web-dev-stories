import { useState, useEffect } from "react";
import { fetchPosts } from "../services/postServices";
import { PostType } from "./Post";
import FeaturedPost from "./FeaturedPost";

export default function Featured() {
  const [posts, setPost] = useState<PostType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredPosts = posts.filter((post) => post.author).slice(0, 3);

  useEffect(() => {
    async function getPosts() {
      const data = await fetchPosts();
      setPost(data);
    }
    getPosts();
  }, []);

  function increaseIndex() {
    setCurrentIndex((curr) => {
      if (curr >= featuredPosts.length - 1) return 0;
      return curr + 1;
    });
  }

  function decreaseIndex() {
    setCurrentIndex((curr) => {
      if (curr <= 0) return featuredPosts.length - 1;
      return curr - 1;
    });
  }

  if (featuredPosts.length)
    return (
      <section className="w-full py-4 px-[5%] md:px-[10%] text-zinc-700 mb-8">
        <div className="gap-2 flex relative aspect-[1.5] md:aspect-[2] max-w-7xl mx-auto ">
          {featuredPosts.map((post, index) => (
            <FeaturedPost
              key={post._id}
              post={post}
              hidden={!(index === currentIndex)}
            />
          ))}
          <button
            onClick={decreaseIndex}
            className="text-zinc-300 hover:text-white absolute left-0 h-full flex items-center justify-center w-8 md:w-12 from-black/50 to-transparent text-2xl font-bold hover:bg-gradient-to-r "
          >
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <button
            onClick={increaseIndex}
            className="text-zinc-300 hover:text-white absolute right-0 h-full flex items-center justify-center w-8 md:w-12 from-black/50 to-transparent text-2xl font-bold hover:bg-gradient-to-l "
          >
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </section>
    );
}
