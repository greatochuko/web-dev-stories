import Post, { Post as PostType } from "./Post";
import { Link } from "react-router-dom";
import PostWireFrame from "./PostWireFrame";

type PostGridProps = {
  title?: string;
  url?: string;
  loading?: boolean;
  grayBg?: boolean;
  posts: PostType[];
};

export default function PostGrid({
  posts,
  loading,
  title,
  url,
  grayBg = true,
}: PostGridProps) {
  return (
    <section className={`pb-10 ${grayBg ? "bg-zinc-100" : ""} text-zinc-700`}>
      {title && (
        <h1 className="mb-4 font-semibold text-2xl max-w-7xl sm:w-[90%] mx-auto px-4 pt-4 flex justify-between">
          {title}
          {url && (
            <Link
              to={url}
              className="p-2 py-1 text-sm border rounded-md border-zinc-700"
            >
              View All
            </Link>
          )}
        </h1>
      )}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  max-w-7xl sm:w-[90%] mx-auto p-4">
        {loading ? (
          <>
            <PostWireFrame />
            <PostWireFrame />
            <PostWireFrame />
          </>
        ) : (
          posts.map((post, i) => <Post post={post} key={i} />)
        )}
      </div>
    </section>
  );
}
