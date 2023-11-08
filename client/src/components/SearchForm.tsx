import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/search/?q=${query}`);
  }

  return (
    <form className="relative flex-1 max-w-xl mx-4" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Web Dev Stories"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-full outline-none px-9 border-zinc-400"
      />
      <button className="absolute px-1 py-2 left-2 text-zinc-400">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <button
        type="button"
        onClick={() => setQuery("")}
        className="absolute px-1 py-2 duration-200 right-2 text-zinc-500 hover:text-zinc-800"
      >
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </form>
  );
}
