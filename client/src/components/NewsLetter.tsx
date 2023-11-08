import NewsLetterForm from "./NewsLetterForm";

export default function NewsLetter() {
  return (
    <section className="relative w-full text-xl h-52 md:h-64 text-zinc-700">
      <img
        src="/newsletter-bg.jpg"
        alt=""
        className="object-cover w-full h-full "
      />
      <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full gap-6 p-4 bg-black/40 sm:px-10 md:flex-row justify-evenly">
        <h2 className="text-white  font-semibold text-[max(2vw,1.3rem)] whitespace-nowrap">
          Sign up for our newsletter
        </h2>
        <NewsLetterForm />
      </div>
    </section>
  );
}
