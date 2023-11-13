import { useState } from "react";
import { getDuration } from "../utils/getDuration";
import useUserContext from "../hooks/useUserContext";

export type CommentType = {
  _id: string;
  message: string;
  children: CommentType[];
  createdAt: string;
};

export type CommentProps = {
  comment: CommentType;
};

export default function Comment({ comment }: CommentProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const { user } = useUserContext();

  return (
    <div className="flex flex-col text-zinc-700 gap-2 pl-2 mt-6 border-l-2 border-zinc-300">
      <div className="flex gap-2 items-center">
        <div className="w-10 border-2 border-white rounded-full aspect-square bg-zinc-300"></div>
        <h4 className="text-lg font-semibold">
          Great Ochuko -{" "}
          <span className="text-base font-normal text-zinc-600">
            {getDuration(comment.createdAt)}
          </span>
        </h4>
      </div>
      <p>{comment.message}</p>
      {user && (
        <div className="flex gap-3 text-lg text-zinc-800">
          <button className="bg-zinc-100 px-1 rounded-md border  border-zinc-200 hover:bg-zinc-200 active:scale-95 duration-100">
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
          <button className="bg-zinc-100 px-1 rounded-md border  border-zinc-200 hover:bg-zinc-200 active:scale-95 duration-100">
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <button
            className="bg-zinc-100 px-2 rounded-md border  border-zinc-200 hover:bg-zinc-200 active:scale-95 duration-100"
            onClick={() => setShowReplyForm((curr) => !curr)}
          >
            Reply
          </button>
        </div>
      )}
      {showReplyForm ? (
        <form className="flex gap-2 w-full ">
          <input
            type="text"
            className="w-full max-w-xl p-1.5 border rounded-md border-zinc-600"
          />
          <button className="px-4 text-white rounded-md bg-zinc-800">
            Reply
          </button>
        </form>
      ) : null}
      {comment.children.length
        ? comment.children.map((comment: CommentType) => (
            <Comment key={comment.message} comment={comment} />
          ))
        : null}
    </div>
  );
}
