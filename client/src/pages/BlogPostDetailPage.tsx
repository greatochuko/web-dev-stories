import { useParams } from "react-router-dom";

import { PostType } from "../components/Post";
import { fetchPost } from "../services/postServices";
import SimilarPosts from "../components/SimilarPosts";
import CommentSection from "../components/CommentSection";
import { CommentType } from "../components/Comment";
import { useEffect, useState } from "react";
import PostDetails from "../components/PostDetails";
import { fetchComments } from "../services/commentServices";
import LoadingIndicator from "../components/LoadingIndicator";

export default function BlogPostDetailPage() {
  const { postId } = useParams<string>();
  const [post, setPost] = useState<PostType | null>(null);
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

  if (loading) return <LoadingIndicator />;

  if (post)
    return (
      <main className="flex flex-col w-full max-w-5xl gap-8 p-6 mx-auto">
        <PostDetails post={post} />
        <CommentSection
          setComments={setComments}
          comments={comments as CommentType[]}
        />
        <SimilarPosts />
      </main>
    );
}
