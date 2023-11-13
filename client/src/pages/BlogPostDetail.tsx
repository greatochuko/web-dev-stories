import { useParams } from "react-router-dom";

import { Post } from "../components/Post";
import { fetchPost } from "../services/postServices";
import SimilarPosts from "../components/SimilarPosts";
import CommentSection, { CommentType } from "../components/CommentSection";
import CommentForm from "../components/CommentForm";
import { useEffect, useState } from "react";
import PostDetails from "../components/PostDetails";

export default function BlogPostDetail() {
  const { postId } = useParams<string>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const comments = post?.comments as CommentType[];

  useEffect(() => {
    async function getPost() {
      setLoading(true);
      const postData = await fetchPost(postId as string);
      setPost(postData);
      setLoading(false);
    }
    getPost();
  }, [postId]);

  if (loading)
    return (
      <div className="flex justify-center items-center flex-1 animate-pulse ">
        Loading...
      </div>
    );

  if (post)
    return (
      <>
        <main className="w-full max-w-5xl p-6 mx-auto">
          <PostDetails post={post} />
          <CommentForm setPost={setPost} postId={postId as string} />

          <CommentSection comments={comments} />
          <SimilarPosts />
        </main>
      </>
    );
}
