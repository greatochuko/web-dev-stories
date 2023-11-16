import { useState } from "react";
import { getDuration } from "../utils/getDuration";
import useUserContext from "../hooks/useUserContext";

import CommentReplyForm from "./CommentReplyForm";

export type CommentType = {
  _id: string;
  message: string;
  children: CommentType[];
  parent: string;
  createdAt: string;
  author: {
    imageUrl: string;
    fullName: string;
  };
};

export type CommentProps = {
  comment: CommentType;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
  children: CommentType[];
};

export default function Comment({
  comment,
  setComments,
  children,
}: CommentProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const { user } = useUserContext();

  return (
    <div className="flex flex-col gap-2 pl-3 mt-6 border-l text-zinc-700 border-zinc-300">
      <div className="flex items-center gap-2">
        <div className="w-10 overflow-hidden border-2 border-white rounded-full aspect-square bg-zinc-300">
          <img
            src={comment.author.imageUrl}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h4 className="text-lg font-semibold">
          {comment.author.fullName} -{" "}
          <span className="text-base font-normal text-zinc-600">
            {getDuration(comment.createdAt)}
          </span>
        </h4>
      </div>
      <p>{comment.message}</p>
      {user && (
        <button
          className="px-2 duration-100 border rounded-md bg-zinc-100 w-fit border-zinc-200 hover:bg-zinc-200 active:scale-95"
          onClick={() => setShowReplyForm((curr) => !curr)}
        >
          Reply
        </button>
      )}
      {showReplyForm ? (
        <CommentReplyForm
          setComments={setComments}
          comment={comment}
          setShowReplyForm={setShowReplyForm}
        />
      ) : null}
      {children.length
        ? children
            .filter((c) => c.parent === comment._id)
            .map((comment: CommentType) => (
              <Comment
                children={children.filter((c) => c.parent === comment._id)}
                setComments={setComments}
                key={comment.message}
                comment={comment}
              />
            ))
        : null}
    </div>
  );
}
