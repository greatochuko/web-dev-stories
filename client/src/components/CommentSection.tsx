import Comment from "./Comment";

import { CommentType } from "./Comment";
import CommentForm from "./CommentForm";

export default function CommentSection({
  comments,
  setComments,
  postId,
}: {
  comments: CommentType[];
  postId: string;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl ">Comments</h3>

      <CommentForm setComments={setComments} postId={postId} />

      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
