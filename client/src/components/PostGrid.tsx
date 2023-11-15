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
        <h1 className="mb-4 font-semibold text-2xl max-w-7xl  mx-auto flex justify-between">
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-7xl mx-auto ">
        {loading ? (
          <>
            <PostWireFrame />
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
