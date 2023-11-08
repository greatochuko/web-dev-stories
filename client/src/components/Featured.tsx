import { Link } from "react-router-dom";

const posts = [1, 2, 3];

export default function Featured() {
  return (
    <section className="p-4 w-full  text-xl  text-zinc-700 max-w-7xl sm:w-[90%] mx-auto">
      <h1 className="mb-4 font-bold">Featured Blog Posts</h1>
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {posts.map((_, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 ${
              i === 0
                ? "sm:col-span-2 xl:col-span-1 xl:row-span-2"
                : "xl:flex-row"
            }`}
          >
            <div
              className={`bg-zinc-400  rounded-md aspect-video ${
                i !== 0 ? "xl:aspect-square" : ""
              }`}
            ></div>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex gap-2 items-center text-base">
                <p className="bg-zinc-200 rounded-sm px-2 py-1 ">React</p>
                <p className="font-semibold">5 min read</p>
              </div>
              <h2 className="font-semibold">
                Lorem ipsum dolor sit amet, adipisicing elit. Rerum, pariatur?
              </h2>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                earum corrupti consequunt...
              </p>
              <Link
                className="text-base w-fit text-zinc-900 hover:underline"
                to={"/"}
              >
                Read More &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
