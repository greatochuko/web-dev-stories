import useUserContext from "../hooks/useUserContext";
import Comment from "./Comment";
import { CommentType } from "./Comment";
import CommentForm from "./CommentForm";

type CommentSectionProps = {
  comments: CommentType[];
  postId: string;
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
};

export default function CommentSection({
  comments,
  setComments,
  postId,
}: CommentSectionProps) {
  const { user } = useUserContext();
  const sortedComments = comments
    .map((a) => a)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl ">Comments</h3>
      {user && <CommentForm setComments={setComments} postId={postId} />}
      <div className="flex flex-col gap-2">
        {sortedComments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
