import { useState } from "react";
import { login } from "../services/authServices";
import { fetchUser } from "../services/userServices";
import useUserContext from "../hooks/useUserContext";

type AuthModalProps = {
  closeModal: () => void;
  type: string;
  setType: (type: "login" | "register") => void;
};

export default function AuthModal({
  closeModal,
  setType,
  type,
}: AuthModalProps) {
  const { setUser } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const cannotLogin = !form.email || !form.password;
  const cannotRegister =
    !form.fullName ||
    !form.email ||
    !form.password ||
    !form.confirmPassword ||
    !(form.confirmPassword === form.password);

  function toggleShowPassword() {
    setShowPassword((curr) => !curr);
  }

  function toggleshowConfirmPassword() {
    setShowConfirmPassword((curr) => !curr);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const data: { token?: string; error?: string } = await login(
      form.email,
      form.password
    );
    if (data.error) {
      setLoading(false);
      setError(data.error);
      return;
    }
    const user = await fetchUser();
    console.log(user);

    setUser(user);
    closeModal();
  }

  function handleSignup() {
    closeModal();
  }

  function changeModalType() {
    if (type === "login") {
      setType("register");
    } else if (type === "register") {
      setType("login");
    }
  }

  return (
    <div
      onClick={closeModal}
      className="fixed top-0 z-20 flex items-center justify-center w-screen h-screen opacity-0 bg-black/50 animate-fade-in"
    >
      <form
        className="flex flex-col gap-2 items-center py-4 px-8 bg-white rounded-md w-[90%] max-w-lg aspect-auto relative animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
        onSubmit={type === "login" ? handleLogin : handleSignup}
      >
        <img src="/favicon.png" alt="" className="h-20" />
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-0 right-0 p-2 pt-1 duration-200 text-zinc-500 hover:text-zinc-900"
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        <h1 className="text-xl font-semibold">
          {type === "login" ? "Login" : "Register"}
        </h1>
        <p className="mb-4">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-blue-900"
            onClick={changeModalType}
          >
            {type === "login" ? "Register" : "Login"}
          </button>
        </p>
        <div className="flex flex-col w-full gap-4 my-auto">
          {type === "register" && (
            <input
              type="text"
              className="p-2 border rounded-md border-zinc-400"
              placeholder="Full Name"
              value={form.fullName}
              onChange={(e) =>
                setForm((curr) => ({ ...curr, fullName: e.target.value }))
              }
            />
          )}
          <input
            type="email"
            className="p-2 border rounded-md border-zinc-400"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm((curr) => ({ ...curr, email: e.target.value }))
            }
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded-md border-zinc-400"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm((curr) => ({ ...curr, password: e.target.value }))
              }
            />
            <button
              type="button"
              className="absolute top-0 right-0 p-2 duration-200 text-zinc-500 hover:text-zinc-900"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </button>
          </div>
          {type === "register" && (
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full p-2 border rounded-md border-zinc-400"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm((curr) => ({
                    ...curr,
                    confirmPassword: e.target.value,
                  }))
                }
              />
              <button
                type="button"
                className="absolute top-0 right-0 p-2 duration-200 text-zinc-500 hover:text-zinc-900"
                onClick={toggleshowConfirmPassword}
              >
                {showConfirmPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </button>
            </div>
          )}
          <div className="text-red-500 text-sm">{error}</div>
          <button
            type="submit"
            className="p-2 text-white rounded-md bg-zinc-900 disabled:bg-zinc-400 disabled:cursor-not-allowed"
            disabled={type === "login" ? cannotLogin : cannotRegister}
          >
            {loading ? "Loading" : type === "login" ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}
