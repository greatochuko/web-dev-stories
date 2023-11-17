import { useState } from "react";
import toast from "react-hot-toast";
import { subscribeToNewsLetter } from "../services/newsLetterServices";

type NewsLetterFormProps = {
  background?: "white" | "black";
};

export default function NewsLetterForm({ background }: NewsLetterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleNewsletterSignup(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await subscribeToNewsLetter(email);
    toast.success("Newsletter Subscription Successfully");
    setEmail("");
    setLoading(false);
  }

  const bg = background === "black" ? "zinc-900" : "white";
  const fg = background === "black" ? "white" : "zinc-900";
  const border = background === "black" ? "zinc-200" : "zinc-900";
  return (
    <form
      className="flex flex-col w-full max-w-lg gap-4 md:flex-row"
      onSubmit={handleNewsletterSignup}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={`p-2 shadow-md rounded-md border border-${border} w-[90%] bg-${bg} text-${fg} text-base outline-none`}
      />
      <button
        disabled={loading || !email}
        type="submit"
        className={`w-fit shadow-md bg-${bg} disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:border-zinc-400 border border-${border} p-2 text-base rounded-md font-semibold text-${fg}`}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
