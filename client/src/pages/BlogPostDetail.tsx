import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PostGrid from "../components/PostGrid";
import Comment from "../components/Comment";

import { useState, useEffect } from "react";
import { Post } from "../components/Post";
import { fetchPost } from "../services/postServices";

const comments = [
  { name: "asdf", children: [{ name: "asd", children: [] }] },
  { name: "sdf", children: [] },
];

export default function BlogPostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    async function getPost() {
      const data = await fetchPost(postId as string);

      setPost(data);
    }
    getPost();
  }, [postId]);

  return (
    <>
      <main className="w-full max-w-5xl p-6 mx-auto">
        <div className="flex-1 py-6 mx-auto">
          <p className="mb-4">Blog &gt; {post?.title}</p>
          <h1 className="text-2xl font-semibold">{post?.title}</h1>
          <Link to={"/creators"} className="flex items-center gap-2 my-4">
            <div className="w-10 h-10 rounded-full bg-zinc-400"></div>
            <div className="flex flex-col text-sm font-semibold">
              <p>{post?.author.fullName}</p>
              <p>{new Date(post?.createdAt as string).toLocaleString()}</p>
            </div>
          </Link>
          <div className="w-full aspect-[1.5] md:aspect-[2] bg-zinc-400"></div>
          <ReactMarkdown className="mt-4">{post?.content}</ReactMarkdown>
        </div>
      </main>
      <div className="my-6 w-[90%] mx-auto flex flex-col gap-4 max-w-5xl">
        <h3 className="text-2xl">Comments</h3>
        <form className="relative flex items-start gap-4">
          <div className="w-[3.5rem] rounded-full aspect-square bg-zinc-300"></div>
          <div className="flex flex-col items-end flex-1 gap-2 md:gap-4">
            <textarea className="w-full h-24 p-2 border-2 rounded-md outline-none sm:h-32 border-zinc-600"></textarea>
            <button className="px-4 py-2 text-white rounded-md bg-zinc-900">
              Comment
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-4 px-4">
          {comments.map((comment) => (
            <Comment key={comment.name} comment={comment} />
          ))}
        </div>
      </div>
      <PostGrid grayBg={false} title="Read More" />
    </>
  );
}
