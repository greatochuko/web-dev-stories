import Post, { PostType } from "./Post";
import { Link } from "react-router-dom";
import PostWireFrame from "./PostWireFrame";

type PostGridProps = {
  title?: string;
  url?: string;
  error: string;
  loading?: boolean;
  grayBg?: boolean;
  posts: PostType[];
};

export default function PostGrid({
  posts,
  loading,
  title,
  error,
  url,
  grayBg = true,
}: PostGridProps) {
  return (
    <section className={`pb-10 ${grayBg ? "bg-zinc-100" : ""} text-zinc-700`}>
      {title && (
        <h1 className="flex justify-between mx-auto mb-4 text-2xl font-semibold max-w-7xl">
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
      {error ? (
        <h1 className="w-full py-10 text-center">{error}</h1>
      ) : !posts.length ? (
        <h1 className="w-full py-10 text-center">
          There are Currently no posts
        </h1>
      ) : (
        <div className="grid gap-4 mx-auto md:grid-cols-2 xl:grid-cols-4 max-w-7xl ">
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
      )}
    </section>
  );
}
