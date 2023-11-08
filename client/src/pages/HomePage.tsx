import Featured from "../components/Featured";
import NewsLetter from "../components/NewsLetter";
import PostGrid from "../components/PostGrid";

export default function HomePage() {
  return (
    <main className="flex flex-col ">
      <Featured />
      <NewsLetter />
      <PostGrid title="Latest" url="/posts/?sortBy=latest" />
      <PostGrid title="Popular" url="/posts/?sortBy=popular" />
    </main>
  );
}
