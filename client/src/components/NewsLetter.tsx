import NewsLetterForm from "./NewsLetterForm";

export default function NewsLetter() {
  return (
    <section className=" w-full text-xl h-52 md:h-64 text-zinc-700 relative">
      <img
        src="/newsletter-bg.jpg"
        alt=""
        className=" w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 bg-black/40 h-full w-full gap-6 p-4 sm:px-10 flex flex-col md:flex-row justify-evenly items-center">
        <h2 className="text-white w-full font-semibold text-[max(2vw,1.3rem)] whitespace-nowrap">
          Sign up for our newsletter
        </h2>
        <NewsLetterForm />
      </div>
    </section>
  );
}
