import { postComment } from "../services/commentServices";
import { useState } from "react";
import { CommentType } from "./Comment";

type CommentFormProps = {
  postId: string;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
};

export default function CommentForm({ postId, setComments }: CommentFormProps) {
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = await postComment(message, postId);

    if (data.error) return setLoading(false);
    setComments(data);
    setLoading(false);
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
        {loading ? "Loading" : "Comment"}
      </button>
    </form>
  );
}
