import { postComment } from "../services/commentServices";
import { useState } from "react";
import { fetchPost } from "../services/postServices";
import { Post } from "./Post";

type CommentFormProps = {
  postId: string;
  setPost: React.Dispatch<React.SetStateAction<Post | null>>;
};

export default function CommentForm({ postId, setPost }: CommentFormProps) {
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateComment() {
    setLoading(true);
    try {
      await postComment(message, postId);
      const data = await fetchPost(postId);
      setPost(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleCreateComment}
      className="flex flex-col items-end flex-1 gap-2 md:gap-4"
    >
      <div className="w-full flex gap-4 items-start">
        <div className="w-[3.5rem] rounded-full aspect-square bg-zinc-300"></div>
        <textarea
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          className="w-full h-24 p-2 border-2 rounded-md outline-none sm:h-32 border-zinc-600"
        ></textarea>
      </div>
      <button
        disabled={loading}
        className="px-4 py-2 text-white rounded-md bg-zinc-900"
      >
        Comment
      </button>
    </form>
  );
}
