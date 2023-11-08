import Post from "./Post";
import { Link } from "react-router-dom";

type PostGridProps = { title: string; url: string };

const posts = [1, 2, 3, 4];
export default function PostGrid({ title, url }: PostGridProps) {
  return (
    <section className="bg-zinc-100 text-zinc-700 pb-10">
      <h1 className="mb-4 font-semibold text-2xl max-w-7xl sm:w-[90%] mx-auto px-4 pt-4 flex justify-between">
        {title}{" "}
        <Link
          to={url}
          className="text-sm border border-zinc-700 py-1 p-2  rounded-md"
        >
          View All
        </Link>
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4  max-w-7xl sm:w-[90%] mx-auto p-4">
        {posts.map((_, i) => (
          <Post key={i} />
        ))}
      </div>
    </section>
  );
}
