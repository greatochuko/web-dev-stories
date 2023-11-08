export default function NewsLetter() {
  return (
    <section className=" w-full text-xl h-40 md:h-52 text-zinc-700 relative">
      <img
        src="/newsletter-bg.jpg"
        alt=""
        className=" w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 bg-black/40 h-full w-full gap-6 p-4 sm:px-10 flex flex-col md:flex-row justify-evenly items-center">
        <h2 className="text-white font-semibold text-[max(2vw,1.3rem)] whitespace-nowrap">
          Sign up for our newsletter
        </h2>
        <form className="flex gap-2 max-w-lg w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 shadow-md shadow-zinc-600 rounded-md w-[90%] bg-white text-base outline-none"
          />
          <button
            type="submit"
            className="w-fit shadow-md shadow-zinc-600 bg-white p-2 text-base rounded-md font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
