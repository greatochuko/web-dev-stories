import { Link } from "react-router-dom";
import { useState } from "react";

type CategoryProps = {
  category: { name: string; url: string; banner: string };
};

export default function Category({ category }: CategoryProps) {
  const [bannerLoaded, setBannerLoaded] = useState(false);

  return (
    <Link
      to={`/search?category=${category.url}`}
      key={category.name}
      className="relative w-full overflow-hidden aspect-video"
    >
      <div className="h-full bg-zinc-300">
        <img
          src={category.banner}
          alt=""
          onLoad={() => setBannerLoaded(true)}
          className={`object-cover w-full h-full duration-300 hover:scale-105 ${
            bannerLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 px-8 text-xl text-white from-black/90 to-black/10 bg-gradient-to-t">
        {category.name}
      </div>
    </Link>
  );
}
