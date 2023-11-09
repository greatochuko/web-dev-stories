import { useSearchParams } from "react-router-dom";
import PostGrid from "../components/PostGrid";
import React, { useState } from "react";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q");
  const [sortBy, setSortBy] = useState(params.get("sortBy") || "");
  const [category, setCategory] = useState(params.get("category") || "");

  function handleChangeSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value);
    params.set("sortBy", e.target.value);
    setParams(params);
  }

  function handleChangeCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
    params.set("category", e.target.value);
    setParams(params);
  }

  return (
    <div className="flex-1 bg-zinc-100">
      <div className="flex flex-wrap my-6 items-center justify-between max-w-7xl sm:w-[90%] mx-auto px-4">
        <h1 className="text-lg font-semibold ">Search results for '{query}'</h1>
        <div className="flex gap-4">
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
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap">Category</p>
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleChangeCategory}
              className="p-1 border rounded-sm outline-none border-zinc-300"
            >
              <option value="javascript">Javascript</option>
              <option value="react">React</option>
            </select>
          </div>
        </div>
      </div>
      <PostGrid />
    </div>
  );
}
