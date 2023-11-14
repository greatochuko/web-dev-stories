import { useState } from "react";
import { createPost } from "../services/postServices";

export default function CreatePostPage() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function publishBlog(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await createPost("title", "content", "react");
    setLoading(false);
  }

  return (
    <form
      className="max-w-4xl w-[90%] mx-auto my-10 flex flex-col gap-4"
      onSubmit={publishBlog}
    >
      <label
        htmlFor="banner"
        className=" w-full aspect-[2] text-6xl text-zinc-400 hover:text-zinc-500 bg-zinc-100 border border-zinc-200  flex items-center justify-center cursor-pointer hover:bg-zinc-200 duration-300"
      >
        <i className="fa-regular fa-image"></i>
      </label>
      <input className="hidden" type="file" name="" id="banner" />
      <textarea
        value={description}
        placeholder="Write a Short Description about your Blog"
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-32 outline-none border rounded-md p-2"
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white font-semibold text-xl rounded-md p-4 bg-zinc-800 disabled:bg-zinc-500"
      >
        {loading ? "Publishing Your Blog..." : "Publish"}
      </button>
    </form>
  );
}
