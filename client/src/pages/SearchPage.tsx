import { useSearchParams } from "react-router-dom";
import PostGrid from "../components/PostGrid";
import React, { useState, useEffect } from "react";
import { searchPosts } from "../services/postServices";
import { Post } from "../components/Post";
import PostWireFrame from "../components/PostWireFrame";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q");
  const [sortBy, setSortBy] = useState(params.get("sortBy") || "");
  const [category, setCategory] = useState(params.get("category") || "all");

  const [posts, setPost] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);
  let filteredPosts: Post[] | null | undefined;

  if (category === "all") {
    filteredPosts = posts;
  } else {
    filteredPosts = posts?.filter((post) => post.category === category);
  }

  useEffect(() => {
    async function getSearchedPosts() {
      setLoading(true);
      const data = await searchPosts(query as string);
      setPost(data);
      setLoading(false);
    }
    getSearchedPosts();
  }, [query]);

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
    <div className="flex-1 bg-zinc-100 px-[10%]">
      <div className="flex flex-wrap my-6 items-center justify-between max-w-7xl mx-auto px-4">
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
              <option value="all">All</option>
              <option value="javascript">Javascript</option>
              <option value="react">React</option>
            </select>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  max-w-7xl sm:w-[90%] mx-auto p-4">
          <PostWireFrame />
          <PostWireFrame />
          <PostWireFrame />
        </div>
      ) : posts?.length ? (
        <PostGrid posts={filteredPosts as Post[]} />
      ) : (
        <div className="w-full py-4 mb-10 flex justify-center">
          No post match the query '{query}'
        </div>
      )}
    </div>
  );
}
