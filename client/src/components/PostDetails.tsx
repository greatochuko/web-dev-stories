import { Link } from "react-router-dom";
import { Post } from "./Post";

export default function PostDetails({ post }: { post: Post }) {
  return (
    <div className="flex-1 py-6 mx-auto">
      <p className="mb-4">Blog &gt; {post?.title}</p>
      <h1 className="text-2xl font-semibold">{post?.title}</h1>
      <Link to={"/creators"} className="flex items-center gap-2 my-4">
        <div className="w-10 h-10 rounded-full bg-zinc-400"></div>
        <div className="flex flex-col text-sm font-semibold">
          <p>{post?.author.fullName}</p>
          <p>{new Date(post?.createdAt as string).toLocaleString()}</p>
        </div>
      </Link>
      <div className="w-full aspect-[1.5] md:aspect-[2] bg-zinc-400"></div>
      <p className="mt-4">{post?.content}</p>
    </div>
  );
}
