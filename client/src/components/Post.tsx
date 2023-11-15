import { Link } from "react-router-dom";
import { User } from "../context/userContext";
import useUserContext from "../hooks/useUserContext";

export type Post = {
  _id: string;
  title: string;
  content: string;
  category: string;
  author: User;
  reads: number;
  comments: [];
  createdAt: string;
};

export default function Post({ post }: { post: Post }) {
  const { user } = useUserContext();

  return (
    <div className="flex flex-col gap-2 bg-white hover:shadow-lg duration-300 group">
      <Link to={`/post/${post._id}`}>
        <div className="w-full aspect-video  bg-zinc-300"></div>
      </Link>
      <div className="flex flex-col gap-2 mt-1 px-2 pb-4">
        <div className="flex items-center gap-2 text-sm">
          <p className="bg-[#eee] rounded-sm px-2 py-1 capitalize">
            {post.category}
          </p>
          <p className="font-semibold">5 min read</p>
          {user?._id === post.author._id ? (
            <div className="ml-auto">
              <button className="px-2 py-1 hover:text-blue-500 duration-200">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="px-2 py-1 hover:text-red-600 duration-200">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ) : null}
        </div>
        <Link
          to={`/post/${post._id}`}
          className="font-semibold group-hover:underline"
        >
          {post.title}
        </Link>
      </div>
    </div>
  );
}
