import { useState } from "react";

type Comment = {
  name: string;
  children: Comment[];
};

export type CommentProps = {
  comment: Comment;
};

export default function Comment({ comment }: CommentProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  return (
    <div className="relative flex pl-10 mt-6 border-l-2 border-zinc-300">
      <div className="absolute left-0 w-[3.5rem] border-2 border-white rounded-full aspect-square bg-zinc-300 -translate-x-[50%]"></div>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold">
          Great Ochuko -{" "}
          <span className="text-base font-normal text-zinc-600">
            20 hours ago
          </span>
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint impedit
          deserunt sequi fuga quidem fugit ipsam harum pariatur voluptas nisi!
        </p>
        <div className="flex gap-3 text-lg text-zinc-800">
          <button>
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
          <p className="font-semibold">2</p>
          <button>
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <button onClick={() => setShowReplyForm((curr) => !curr)}>
            Reply
          </button>
        </div>
        {showReplyForm ? (
          <form className="flex gap-2">
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
          ? comment.children.map((comment: Comment) => (
              <Comment key={comment.name} comment={comment} />
            ))
          : null}
      </div>
    </div>
  );
}