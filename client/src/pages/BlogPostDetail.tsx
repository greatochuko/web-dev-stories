import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PostGrid from "../components/PostGrid";

const postDetail = "**asdf**";

export default function BlogPostDetail() {
  const { postTitle } = useParams();

  return (
    <>
      <div className="flex-1 max-w-6xl w-[90%] mx-auto py-6">
        <p className="mb-4">Blog &gt; {postTitle}</p>
        <h1 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet, adipisicing elit. Rerum, pariatur?
        </h1>
        <Link to={"/creators"} className="flex items-center gap-2 my-4">
          <div className="w-10 h-10 rounded-full bg-zinc-400"></div>
          <div className="flex flex-col text-sm font-semibold">
            <p>John Doe</p>
            <p>11 Nov, 2023</p>
          </div>
        </Link>
        <div className="w-full aspect-[1.5] md:aspect-[2] bg-zinc-400"></div>
        <ReactMarkdown>{postDetail}</ReactMarkdown>
      </div>
      <PostGrid grayBg={false} title="Read More" />
    </>
  );
}
