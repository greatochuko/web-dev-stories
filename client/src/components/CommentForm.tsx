import { postComment } from "../services/commentServices";
import { useState } from "react";
import { CommentType } from "./Comment";
import useUserContext from "../hooks/useUserContext";

type CommentFormProps = {
  postId: string;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
};

export default function CommentForm({ postId, setComments }: CommentFormProps) {
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();

  async function handleCreateComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = await postComment(message, postId);

    if (data.error) {
      setLoading(false);
      setmessage("");
      return;
    }
    setmessage("");
    setComments(data);
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleCreateComment}
      className="flex flex-col focus-within:shadow-lg flex-1 gap-2 md:gap-4 border-zinc-400 border rounded-md p-2 md:p-4"
    >
      <div className="flex gap-2 font-semibold items-center">
        <div className="w-10 rounded-full aspect-square bg-zinc-300 "></div>
        <h2>{user.fullName}</h2>
      </div>
      <textarea
        value={message}
        onChange={(e) => setmessage(e.target.value)}
        placeholder="Comment"
        className="w-full h-24 p-2 border-b outline-none sm:h-32 resize-none border-zinc-300"
      ></textarea>
      <button
        disabled={loading}
        className="px-4 py-2 ml-auto text-white rounded-md bg-zinc-800 hover:bg-zinc-900 duration-200"
      >
        {loading ? "Loading" : "Comment"}
      </button>
    </form>
  );
}
