import { useState, useEffect } from "react";
import { createPost, fetchPost, updatePost } from "../services/postServices";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from "../components/Post";

export default function CreatePostPage() {
  const { postId } = useParams();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("react");
  const navigate = useNavigate();

  useEffect(() => {
    async function getPostToEdit() {
      if (!postId) return;
      const data: PostType & { error: string } = await fetchPost(
        postId as string
      );

      if (data.error) return;
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
    }
    getPostToEdit();
  }, [postId]);

  async function publishBlog(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await createPost(title, content, category);
    if (data.error) return;
    navigate(-1);
    setLoading(false);
  }

  async function updateBlog(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const data = await updatePost(postId as string, title, content, category);
    if (data.error) return;
    navigate(-1);
    setLoading(false);
  }

  return (
    <form
      className="max-w-4xl w-[90%] mx-auto my-10 flex flex-col gap-4 text-zinc-800"
      onSubmit={postId ? updateBlog : publishBlog}
    >
      <label
        htmlFor="banner"
        className=" w-full aspect-[2] flex-col text-6xl text-zinc-400 hover:text-zinc-500 bg-zinc-100 border border-zinc-200  flex items-center justify-center cursor-pointer hover:bg-zinc-200 duration-300"
      >
        <i className="fa-regular fa-image"></i>
        <p className="text-4xl">Click to Select Banner</p>
      </label>
      <input className="hidden" type="file" name="" id="banner" />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="text-4xl font-semibold outline-none"
      />
      <div className="flex gap-4 font-semibold">
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="javascript">Javascript</option>
          <option value="react">React</option>
        </select>
      </div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        className="h-[100vh]"
        placeholder="Start Writing"
      />
      <textarea
        value={description}
        placeholder="Write a Short Description about your Blog"
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-32 outline-none border rounded-md p-2 resize-none mt-10"
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white font-semibold text-xl rounded-md p-4 bg-zinc-800 disabled:bg-zinc-500"
      >
        {loading ? "Publishing Your Blog..." : postId ? "Update" : "Publish"}
      </button>
    </form>
  );
}
