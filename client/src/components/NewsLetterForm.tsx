type NewsLetterFormProps = {
  background?: "white" | "black";
};

export default function NewsLetterForm({ background }: NewsLetterFormProps) {
  const bg = background === "black" ? "zinc-900" : "white";
  const fg = background === "black" ? "white" : "zinc-900";
  const border = background === "black" ? "zinc-200" : "zinc-900";
  return (
    <form className="flex flex-col w-full max-w-lg gap-4 md:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        className={`p-2 shadow-md rounded-md border border-${border} w-[90%] bg-${bg} text-${fg} text-base outline-none`}
      />
      <button
        type="submit"
        className={`w-fit shadow-md bg-${bg} border border-${border} p-2 text-base rounded-md font-semibold text-${fg}`}
      >
        Subscribe
      </button>
    </form>
  );
}
