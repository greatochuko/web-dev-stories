import { useSearchParams } from "react-router-dom";
import PostGrid from "../components/PostGrid";
import React, { useState } from "react";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const sort = params.get("sortBy");
  const query = params.get("q");
  const [sortBy, setSortBy] = useState(sort as string);

  function handleChangeSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value);
    setParams((curr) => {
      return { ...curr, q: query, sortBy: e.target.value };
    });
  }

  return (
    <div className="flex-1 bg-zinc-100">
      <div className="flex justify-between max-w-7xl sm:w-[90%] mx-auto px-4">
        <h1 className="mt-6 mb-2 text-lg font-semibold ">
          Search results for '{query}'
        </h1>
        <div className="flex items-center gap-2">
          <p className="whitespace-nowrap">Sort By</p>
          <select
            name="sort"
            id="sort"
            value={sortBy}
            onChange={handleChangeSort}
            className="p-1 border rounded-sm outline-none border-zinc-300"
          >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>
      <PostGrid />
    </div>
  );
}
