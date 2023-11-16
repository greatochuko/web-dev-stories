import { useState, useEffect, useRef } from "react";
import {
  createPost,
  fetchPost,
  updatePost,
  uploadPhoto,
} from "../services/postServices";

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
  const [banner, setBanner] = useState<Blob | null>(null);
  const [bannnerUrl, setBannerUrl] = useState("");
  const { current: image } = useRef(new Image());
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
    const { url } = await uploadPhoto(banner as Blob);
    const data = await createPost(title, content, category, url);
    if (data.error) return setLoading(false);
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

  function handleChangeBanner(e: React.ChangeEvent<HTMLInputElement>) {
    const imageFile = (e.target.files as FileList)[0];
    const MAX_WIDTH = 1000;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (e) => {
      const imageUrl: string = e.target?.result as string;

      image.src = imageUrl;
      setBannerUrl(imageUrl);

      const canvas = document.createElement("canvas");
      const scaleSize = MAX_WIDTH / image.width;
      canvas.height = image.height * scaleSize;
      canvas.width = MAX_WIDTH;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx?.canvas.toBlob((blob) => {
        setBanner(blob);
      });
    };
  }

  return (
    <form
      className="max-w-4xl w-[90%] mx-auto my-10 flex flex-col gap-4 text-zinc-800"
      onSubmit={postId ? updateBlog : publishBlog}
    >
      <div className="relative w-full aspect-[2] overflow-hidden  border border-zinc-200 ">
        <label
          htmlFor="banner"
          className="w-full h-full absolute cursor-pointer  flex-col gap-2 text-zinc-300 hover:bg-black/50 bg-black/30 flex items-center hover:text-white justify-center duration-300"
        >
          <i className="fa-regular fa-image text-5xl"></i>
          <p className="text-2xl">
            Click to {banner ? "Change" : "Select"} Banner
          </p>
        </label>
        <input
          className="hidden"
          onChange={handleChangeBanner}
          type="file"
          accept=".png, .jpg, .jpeg"
          name=""
          id="banner"
        />
        {banner ? (
          <img src={bannnerUrl} className="h-full w-full object-cover" alt="" />
        ) : null}
      </div>
      <textarea
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
