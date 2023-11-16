import { useState, useEffect, useRef } from "react";
import { createPost, fetchPost, updatePost } from "../services/postServices";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from "../components/Post";

import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

export default function CreatePostPage() {
  const { postId } = useParams();
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("react");
  const [banner, setBanner] = useState<Blob | null>(null);
  const { current: image } = useRef(new Image());

  const navigate = useNavigate();

  const cannotCreate = !title || !banner || !content;
  const cannotUpdate = !title || !content;

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
    if (cannotCreate) return;
    setLoading(true);
    const storageRef = ref(storage, `/posts/${crypto.randomUUID()}`);
    const uploadTask = await uploadBytesResumable(storageRef, banner);
    const url = await getDownloadURL(uploadTask.ref);
    const data = await createPost(title, content, category, url);
    if (data.error) return setLoading(false);
    toast.success("Blog post created successfully");
    navigate(-1);
    setLoading(false);
  }

  async function updateBlog(e: React.FormEvent) {
    e.preventDefault();
    if (cannotUpdate) return;
    setLoading(true);
    let url;
    if (banner) {
      const storageRef = ref(storage, `/posts/${crypto.randomUUID()}`);
      const uploadTask = await uploadBytesResumable(storageRef, banner);
      url = await getDownloadURL(uploadTask.ref);
    }
    const data = await updatePost(
      postId as string,
      title,
      content,
      category,
      url
    );
    if (data.error) return;
    toast.success("Blog post created successfully");
    navigate(-1);
    setLoading(false);
  }

  function handleChangeBanner(e: React.ChangeEvent<HTMLInputElement>) {
    const imageFile = (e.target.files as FileList)[0];
    const MAX_WIDTH = 1000;

    const fileReader = new FileReader();
    if (!imageFile) return;
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (fileReaderEvent) => {
      const imageUrl: string = fileReaderEvent.target?.result as string;
      image.src = imageUrl;

      image.onload = (ev) => {
        const eventTarget = ev.target as HTMLImageElement;
        const canvas = document.createElement("canvas");
        const scaleSize = MAX_WIDTH / eventTarget.width;

        canvas.height = eventTarget.height * scaleSize;
        canvas.width = MAX_WIDTH;

        const ctx = canvas.getContext("2d");
        ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);

        ctx?.canvas.toBlob((blob) => {
          new File([blob as Blob], imageFile.name);
          setBanner(blob);
        });
      };
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
          className="absolute flex flex-col items-center justify-center w-full h-full gap-2 duration-300 cursor-pointer text-zinc-300 hover:bg-black/50 bg-black/30 hover:text-white"
        >
          <i className="text-5xl fa-regular fa-image"></i>
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
          <img src={image.src} className="object-cover w-full h-full" alt="" />
        ) : null}
      </div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="text-3xl font-semibold outline-none"
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
        className="w-full h-32 p-2 mt-10 border rounded-md outline-none resize-none"
      ></textarea>
      <button
        type="submit"
        disabled={loading || (postId ? cannotUpdate : cannotCreate)}
        className="w-full p-4 text-xl font-semibold text-white rounded-md disabled:cursor-not-allowed bg-zinc-800 disabled:bg-zinc-500"
      >
        {loading ? "Publishing Your Blog..." : postId ? "Update" : "Publish"}
      </button>
    </form>
  );
}
