import { useParams } from "react-router-dom";

import { Post } from "../components/Post";
import { fetchPost } from "../services/postServices";
import SimilarPosts from "../components/SimilarPosts";
import CommentSection from "../components/CommentSection";
import { CommentType } from "../components/Comment";
import { useEffect, useState } from "react";
import PostDetails from "../components/PostDetails";
import { fetchComments } from "../services/commentServices";

export default function BlogPostDetail() {
  const { postId } = useParams<string>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<CommentType[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPost() {
      setLoading(true);
      const postData = await fetchPost(postId as string);
      const commentsData = await fetchComments(postId as string);
      setComments(commentsData);
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
      <main className="w-full flex flex-col gap-8 max-w-5xl p-6 mx-auto">
        <PostDetails post={post} />
        <CommentSection
          setComments={setComments}
          comments={comments as CommentType[]}
        />
        <SimilarPosts />
      </main>
    );
}
