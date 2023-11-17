import Category from "../components/Category";

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
          <Category category={category} key={category.name} />
        ))}
      </div>
    </main>
  );
}
