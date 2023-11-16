import { Link } from "react-router-dom";
import { User } from "../context/userContext";
import useUserContext from "../hooks/useUserContext";
import ModalContainer from "./ModalContainer";
import { useState } from "react";
import DeletePostModal from "./DeletePostModal";

export type PostType = {
  _id: string;
  title: string;
  content: string;
  category: string;
  author: User;
  reads: number;
  comments: [];
  createdAt: string;
  banner: string;
};

export default function Post({
  post,
  refreshPosts,
  showButtons,
}: {
  post: PostType;
  refreshPosts?: () => void;
  showButtons?: boolean;
}) {
  const { user } = useUserContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 overflow-hidden duration-300 bg-white rounded-md hover:shadow-lg group">
        <Link to={`/post/${post._id}`}>
          <div className="w-full overflow-hidden aspect-video bg-zinc-300">
            <img
              src={post.banner}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-2 px-2 pb-4 mt-1">
          <div className="flex items-center gap-2 text-sm">
            <p className="bg-[#eee] rounded-sm px-2 py-1 capitalize">
              {post.category}
            </p>
            <p className="font-semibold">5 min read</p>
            {showButtons && user?._id === post.author._id ? (
              <div className="ml-auto">
                <Link
                  to={`/edit/${post._id}`}
                  className="px-2 py-1 duration-200 hover:text-blue-500"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  onClick={() => setModalIsOpen(true)}
                  className="px-2 py-1 duration-200 hover:text-red-600"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            ) : null}
          </div>
          <Link
            to={`/post/${post._id}`}
            className="font-semibold group-hover:underline"
          >
            {post.title}
          </Link>
        </div>
      </div>
      {modalIsOpen && (
        <ModalContainer closeModal={() => setModalIsOpen(false)}>
          <DeletePostModal
            closeModal={() => setModalIsOpen(false)}
            postTitle={post.title}
            postId={post._id}
            refreshPosts={refreshPosts as () => void}
          />
        </ModalContainer>
      )}
    </>
  );
}
