import { Link } from "react-router-dom";
import { PostType } from "./Post";

export default function PostDetails({ post }: { post: PostType }) {
  return (
    <div className="flex-1 py-6 w-full mx-auto">
      <p className="mb-4">Blog &gt; {post?.title}</p>
      <h1 className="text-2xl font-semibold">{post?.title}</h1>
      <Link to={"/creators"} className="flex items-center gap-2 my-4">
        <div className="w-10 h-10 rounded-full bg-zinc-400"></div>
        <div className="flex flex-col text-sm font-semibold">
          <p>{post?.author.fullName}</p>
          <p>{new Date(post?.createdAt as string).toDateString()}</p>
        </div>
      </Link>
      <div className="w-full aspect-[1.5] md:aspect-video bg-zinc-400 overflow-hidden">
        <img src={post.banner} alt="" className="h-full w-full object-cover" />
      </div>
      <div
        className="mt-4 flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}
