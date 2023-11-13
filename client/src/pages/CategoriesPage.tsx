import { Link } from "react-router-dom";

const categories = [1, 2, 3, 4, 5, 6];

export default function CategoriesPage() {
  return (
    <main className="flex-1  max-w-7xl w-[90%] mx-auto py-4 sm:px-4">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            to={"/search?category=react"}
            key={category}
            className="relative h-56 overflow-hidden"
          >
            <div className="h-full bg-zinc-300"></div>
            <div className="absolute bottom-0 left-0 p-4 px-8 text-xl bg-white">
              React
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
