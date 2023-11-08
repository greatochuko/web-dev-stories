import Featured from "../components/Featured";
import NewsLetter from "../components/NewsLetter";
import PostGrid from "../components/PostGrid";

export default function HomePage() {
  return (
    <main className="flex flex-col ">
      <Featured />
      <NewsLetter />
      <PostGrid title="Latest" url="/search/?q=&sortBy=latest" />
      <PostGrid title="Popular" url="/search/?q=&sortBy=popular" />
    </main>
  );
}
