import { Link } from "react-router-dom";
import { PostType } from "./Post";

export default function FeaturedPost({
  post,
  hidden,
}: {
  post: PostType;
  hidden?: boolean;
}) {
  console.log(post.author);

  return (
    <Link
      to={`/post/${post._id}`}
      key={post._id}
      className={`bg-black h-full w-full top-0 left-0 absolute overflow-hidden rounded-md duration-200 ${
        hidden ? "opacity-0" : ""
      }`}
    >
      <img src={post.banner} alt="" className="w-full h-full object-cover" />
      <div className="flex flex-col gap-2 text-white bg-black/50 absolute top-0 left-0 w-full h-full px-8 md:px-12 py-4 md:py-12 justify-end">
        <p>{post.category}</p>
        <h2 className="text-base md:text-2xl font-semibold">{post.title}</h2>
        <p>{new Date(post.createdAt).toDateString()}</p>
        <div className="flex gap-2 items-center">
          <div className="w-10 aspect-square bg-zinc-500 rounded-full overflow-hidden">
            <img
              src={post.author.imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h3>{post.author.fullName}</h3>
        </div>
      </div>
    </Link>
  );
}
