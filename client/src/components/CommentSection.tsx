import Comment from "./Comment";

export type CommentType = {
  _id: string;
  message: string;
  children: Comment[];
};

export default function CommentSection({
  comments,
}: {
  comments: CommentType[];
}) {
  console.log(comments);

  return (
    <div className="flex flex-col gap-4 px-4">
      <h3 className="text-2xl">Comments</h3>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}
