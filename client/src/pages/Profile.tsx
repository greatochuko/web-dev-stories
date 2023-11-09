import Post from "../components/Post";

const posts = [1, 2, 3, 4];

export default function Profile() {
  return (
    <div className="max-w-7xl w-[90%] mx-auto flex-1 py-4">
      <div className="flex flex-col gap-6 text-zinc-800">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-md h-28 aspect-square bg-zinc-500"></div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold">Great Ochuko</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className="flex justify-between w-full gap-4 text-zinc-700">
            <div className="flex flex-col items-center flex-1 p-2 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-center">{posts.length}</h3>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center flex-1 p-2 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-center">253</h3>
              <p>Reads</p>
            </div>
            <div className="flex flex-col items-center flex-1 p-2 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-center">120</h3>
              <p>Comments</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <Post key={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
