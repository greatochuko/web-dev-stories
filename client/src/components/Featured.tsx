import { useState } from "react";
import { PostType } from "./Post";
import FeaturedPost from "./FeaturedPost";
import FeaturedPostWireframe from "./FeaturedPostWireframe";

type FeaturedProps = {
  posts: PostType[];
  error: string;
  loading: boolean;
};

export default function Featured({ posts, error, loading }: FeaturedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredPosts = posts.filter((post) => post.author).slice(0, 3);

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

  return (
    <section className="w-full py-4 px-[5%] md:px-[10%] text-zinc-700 mb-8">
      {error ? (
        <h1 className="w-full py-10 text-center">{error}</h1>
      ) : loading ? (
        <FeaturedPostWireframe />
      ) : (
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
            className="absolute left-0 flex items-center justify-center w-8 h-full text-2xl font-bold text-zinc-300 hover:text-white md:w-12 from-black/50 to-transparent hover:bg-gradient-to-r "
          >
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <button
            onClick={increaseIndex}
            className="absolute right-0 flex items-center justify-center w-8 h-full text-2xl font-bold text-zinc-300 hover:text-white md:w-12 from-black/50 to-transparent hover:bg-gradient-to-l "
          >
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      )}
    </section>
  );
}
