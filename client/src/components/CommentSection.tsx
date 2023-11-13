import useUserContext from "../hooks/useUserContext";
import Comment from "./Comment";
import { CommentType } from "./Comment";
import CommentForm from "./CommentForm";

type CommentSectionProps = {
  comments: CommentType[];
  setComments: React.Dispatch<React.SetStateAction<CommentType[] | null>>;
};

export default function CommentSection({
  comments,
  setComments,
}: CommentSectionProps) {
  const { user } = useUserContext();
  const sortedComments = comments
    .filter((comment) => !comment.parent)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl ">Comments</h3>
      {user && <CommentForm setComments={setComments} />}
      <div className="flex flex-col gap-2">
        {sortedComments.map((comment) => (
          <Comment
            children={comments
              .filter((c) => c.parent)
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )}
            key={comment._id}
            comment={comment}
            setComments={setComments}
          />
        ))}
      </div>
    </div>
  );
}
