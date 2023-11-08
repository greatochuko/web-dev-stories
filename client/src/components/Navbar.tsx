import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-10 bg-white">
      <nav className="h-14 shadow-md flex justify-between items-center py-2 px-4 sm:px-8">
        <img src="/logo.png" alt="logo" className="h-full" />
        <ul
          className={`gap-6 items-center text-zinc-600 top-[60px] pt-4 sm:pt-0 duration-300 absolute sm:static sm:bg-transparent flex flex-col w-44 h-screen sm:h-fit  bg-white shadow-md pb-4 sm:pb-0 sm:w-fit sm:flex-row  sm:shadow-none ${
            navIsOpen ? "right-0" : " -right-full"
          }`}
        >
          <li>
            <Link className="p-2 font-semibold" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="p-2 " to={"/popular"}>
              Popular
            </Link>
          </li>
          <li>
            <Link className="p-2 " to={"/trending"}>
              Trending
            </Link>
          </li>
          <li>
            <Link
              to={"/register"}
              className="px-4 py-1 rounded-md border border-zinc-700"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"/register"}
              className="px-4 py-1 rounded-md bg-zinc-700 text-zinc-100 border border-zinc-700"
            >
              Register
            </Link>
          </li>
        </ul>
        <button
          className=" sm:hidden p-2 text-lg"
          onClick={() => setNavIsOpen((curr) => !curr)}
        >
          {navIsOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </nav>
    </header>
  );
}
