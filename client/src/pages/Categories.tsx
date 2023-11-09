import { Link } from "react-router-dom";

const categories = [1, 2, 3, 4, 5, 6];

export default function Categories() {
  return (
    <main className="flex-1  max-w-7xl w-[90%] mx-auto py-4 sm:px-4">
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            to={"/search?category=react"}
            key={category}
            className="h-56 relative overflow-hidden"
          >
            <div className="bg-zinc-300 h-full"></div>
            <div className="absolute bottom-0 left-0 p-4 px-8  bg-white text-xl">
              React
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
