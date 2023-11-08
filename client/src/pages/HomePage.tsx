import Featured from "../components/Featured";
import NewsLetter from "../components/NewsLetter";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10">
      <Featured />
      <NewsLetter />
    </main>
  );
}
