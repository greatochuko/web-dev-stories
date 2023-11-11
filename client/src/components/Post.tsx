import { Link } from "react-router-dom";
import { User } from "../context/userContext";

export type Post = {
  _id: string;
  title: string;
  content: string;
  category: string;
  author: User;
  reads: number;
  comments: [];
};

export default function Post({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full aspect-[1.5] bg-zinc-400"></div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex items-center gap-2 text-base">
          <p className="bg-[#eee] rounded-sm px-2 py-1 ">React</p>
          <p className="font-semibold">5 min read</p>
          <button className="px-2 py-1 ml-auto text-blue-500">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="px-2 py-1 text-red-600">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <Link to={`/post/${post._id}`} className="font-semibold">
          {post.title}
        </Link>
        <p className="text-base">
          {post.content.split(" ").slice(0, 7).join(" ")}...
          <Link
            className="text-sm text-blue-600 w-fit hover:underline ml-2"
            to={`/post/${post._id}`}
          >
            Read More &gt;
          </Link>
        </p>
      </div>
    </div>
  );
}
