import { Link } from "react-router-dom";

export default function Post() {
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

        <h2 className="font-semibold">
          Lorem ipsum dolor sit amet, adipisicing elit. Rerum, pariatur?
        </h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elitt...
        </p>
        <Link
          className="text-sm text-blue-600 w-fit hover:underline"
          to={"/post/lorem"}
        >
          Read More &gt;
        </Link>
      </div>
    </div>
  );
}
