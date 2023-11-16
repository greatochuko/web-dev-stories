import toast from "react-hot-toast";
import { deletePost } from "../services/postServices";

type DeletePostModalProps = {
  closeModal: () => void;
  refreshPosts: () => void;
  postTitle: string;
  postId: string;
};

export default function DeletePostModal({
  closeModal,
  postTitle,
  postId,
  refreshPosts,
}: DeletePostModalProps) {
  async function handleDeletePost() {
    const data = await deletePost(postId);
    if (data.error) return;
    toast.success("Blog Post deleted successfully");
    closeModal();
    refreshPosts();
    return;
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 items-center bg-white rounded-md w-[80%] max-w-md overflow-hidden"
    >
      <div className="w-full p-6">
        <h2 className="mb-2 text-xl font-semibold">Delete?</h2>
        <p>
          Are you sure you want to Delete Post -{" "}
          <span className="font-semibold">{postTitle}</span>?
        </p>
      </div>
      <div className="flex justify-end w-full gap-4 p-4 bg-zinc-200">
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-white border rounded-md border-zinc-400"
        >
          Cancel
        </button>
        <button
          onClick={handleDeletePost}
          className="px-4 py-2 text-white bg-red-600 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
