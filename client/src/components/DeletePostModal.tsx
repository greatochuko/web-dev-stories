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
    closeModal();
    refreshPosts();
    return;
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col gap-2 items-center bg-white rounded-md w-[80%] max-w-md overflow-hidden"
    >
      <div className="p-6 w-full">
        <h2 className="text-xl font-semibold mb-2">Delete?</h2>
        <p>
          Are you sure you want to Delete Post -{" "}
          <span className="font-semibold">{postTitle}</span>?
        </p>
      </div>
      <div className="bg-zinc-200 flex justify-end w-full p-4 gap-4">
        <button
          onClick={closeModal}
          className="bg-white px-4 py-2 rounded-md border border-zinc-400"
        >
          Cancel
        </button>
        <button
          onClick={handleDeletePost}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
