import { Link } from "react-router-dom";

const categories = [
  { name: "React", banner: "/react-category-banner.png", url: "react" },
  {
    name: "Javascript",
    banner: "/javascript-category-banner.png",
    url: "javascript",
  },
  {
    name: "Express Js",
    banner: "/express-category-banner.jpg",
    url: "express",
  },
  { name: "Mongo DB", banner: "/mongodb-category-banner.png", url: "mongodb" },
];

export default function CategoriesPage() {
  return (
    <main className="flex-1  max-w-7xl w-[90%] mx-auto py-4 my-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            to={`/search?category=${category.url}`}
            key={category.name}
            className="relative w-full overflow-hidden aspect-video"
          >
            <div className="h-full bg-zinc-300">
              <img
                src={category.banner}
                alt=""
                className="object-cover w-full h-full duration-200 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 px-8 text-xl text-white from-black/90 to-black/10 bg-gradient-to-t">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
