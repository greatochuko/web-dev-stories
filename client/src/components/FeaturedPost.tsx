import { Link } from "react-router-dom";
import { PostType } from "./Post";

export default function FeaturedPost({
  post,
  hidden,
}: {
  post: PostType;
  hidden?: boolean;
}) {
  return (
    <Link
      to={`/post/${post._id}`}
      key={post._id}
      className={`bg-black h-full w-full top-0 left-0 absolute overflow-hidden rounded-md duration-200 ${
        hidden ? "opacity-0" : ""
      }`}
    >
      <img src={post.banner} alt="" className="object-cover w-full h-full" />
      <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full gap-2 px-8 py-4 text-white bg-black/50 md:px-12 md:py-12">
        <p>{post.category}</p>
        <h2 className="text-base font-semibold md:text-2xl">{post.title}</h2>
        <p>{new Date(post.createdAt).toDateString()}</p>
        <div className="flex items-center gap-2">
          <div className="w-10 overflow-hidden rounded-full aspect-square bg-zinc-500">
            <img
              src={post.author.imageUrl}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <h3>{post.author.fullName}</h3>
        </div>
      </div>
    </Link>
  );
}
