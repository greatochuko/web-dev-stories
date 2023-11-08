import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full aspect-[1.5] bg-zinc-400"></div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex gap-2 items-center text-base">
          <p className="bg-[#eee] rounded-sm px-2 py-1 ">React</p>
          <p className="font-semibold">5 min read</p>
        </div>
        <h2 className="font-semibold">
          Lorem ipsum dolor sit amet, adipisicing elit. Rerum, pariatur?
        </h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elitt...
        </p>
        <Link
          className="text-base w-fit text-zinc-900 hover:underline"
          to={"/"}
        >
          Read More &gt;
        </Link>
      </div>
    </div>
  );
}
