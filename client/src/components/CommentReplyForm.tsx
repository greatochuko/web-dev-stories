import { fetchComments, postComment } from "../services/commentServices";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { CommentType } from "./Comment";
import toast from "react-hot-toast";

type CommentReplyFormProps = {
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
  setShowReplyForm: React.Dispatch<React.SetStateAction<boolean>>;
  comment: CommentType;
};

export default function CommentReplyForm({
  setComments,
  setShowReplyForm,
  comment,
}: CommentReplyFormProps) {
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();

  async function handleReplyComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = await postComment(message, postId as string, comment._id);
    if (data.error) {
      setLoading(false);
      setmessage("");
      return;
    }
    const commentsData = await fetchComments(postId as string);
    setmessage("");
    setComments(commentsData);
    toast.success("Reply posted Successfully");
    setLoading(false);
    setShowReplyForm(false);
  }

  return (
    <form className="flex w-full gap-2 " onSubmit={handleReplyComment}>
      <input
        type="text"
        className="w-full max-w-xl p-1.5 border rounded-md border-zinc-600"
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      />
      <button
        disabled={loading}
        className="px-4 text-white rounded-md bg-zinc-800 disabled:bg-zinc-500"
      >
        {loading ? "Loading" : "Reply"}
      </button>
    </form>
  );
}
