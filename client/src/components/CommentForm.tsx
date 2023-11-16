import { fetchComments, postComment } from "../services/commentServices";
import { useState } from "react";
import { CommentType } from "./Comment";
import useUserContext from "../hooks/useUserContext";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

type CommentFormProps = {
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
};

export default function CommentForm({ setComments }: CommentFormProps) {
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();
  const { postId } = useParams<string>();

  async function handleCreateComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = await postComment(message, postId as string);

    if (data.error) {
      setLoading(false);
      setmessage("");
      toast.error("Error: Unable to post Comment");
      return;
    }
    setmessage("");
    const postData = await fetchComments(postId as string);
    if (postData.error) {
      setLoading(false);
      setmessage("");
      toast.error("Error: Unable to post Comment");
      return;
    }
    setComments(postData);
    toast.success("Comment posted Successfully");
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleCreateComment}
      className="flex flex-col flex-1 gap-2 p-2 border rounded-md focus-within:shadow-lg md:gap-4 border-zinc-400 md:p-4"
    >
      <div className="flex items-center gap-2 font-semibold">
        <div className="w-10 overflow-hidden rounded-full aspect-square bg-zinc-300">
          <img
            src={user.imageUrl}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h2>{user.fullName}</h2>
      </div>
      <textarea
        value={message}
        onChange={(e) => setmessage(e.target.value)}
        placeholder="Comment"
        className="w-full h-24 p-2 border-b outline-none resize-none sm:h-32 border-zinc-300"
      ></textarea>
      <button
        disabled={loading || !message}
        className="px-4 py-2 ml-auto text-white duration-200 rounded-md disabled:cursor-not-allowed bg-zinc-800 hover:bg-zinc-900 disabled:bg-zinc-500"
      >
        {loading ? "Loading" : "Comment"}
      </button>
    </form>
  );
}
