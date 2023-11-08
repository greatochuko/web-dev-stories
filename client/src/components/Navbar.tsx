import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { pathname, search } = useLocation();

  return (
    <header className="fixed top-0 z-10 w-full bg-white">
      <nav className="flex items-center justify-between px-4 py-2 shadow-md h-14 sm:px-8">
        <Link to={"/"} className="flex h-full p-1 md:p-0">
          <img src="/favicon.png" alt="logo" className="h-full" />
          <img src="/logo.png" alt="logo" className="h-full" />
        </Link>
        <SearchForm />
        <ul
          className={`gap-6 items-center text-zinc-600 top-[54px] pt-4 sm:pt-0 duration-300 absolute sm:static sm:bg-transparent flex flex-col w-44 h-screen sm:h-fit  bg-white shadow-md pb-4 sm:pb-0 sm:w-fit sm:flex-row  sm:shadow-none ${
            navIsOpen ? "right-0" : " -right-full"
          }`}
        >
          <li>
            <Link
              className={`p-2 ${pathname === "/" ? "font-semibold" : ""}`}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`p-2 ${
                search.includes("sortBy=popular") ? "font-semibold" : ""
              }`}
              to={"/search?q=&sortBy=popular"}
            >
              Popular
            </Link>
          </li>
          <li>
            <Link className="p-2 " to={"/categories"}>
              Categories
            </Link>
          </li>
          <li>
            <Link
              to={"/register"}
              className="px-4 py-1 border rounded-md border-zinc-700"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to={"/register"}
              className="px-4 py-1 border rounded-md bg-zinc-700 text-zinc-100 border-zinc-700"
            >
              Register
            </Link>
          </li>
        </ul>
        <button
          className="p-2 text-lg sm:hidden"
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
