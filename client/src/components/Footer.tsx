// import {Link} from "react-router-dom"

import NewsLetterForm from "./NewsLetterForm";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white ">
      <div className="max-w-7xl w-[90%] mx-auto p-4 md:p-6 flex flex-col md:flex-row justify-between gap-4 border-b">
        <div className="flex gap-2">
          <img src="/favicon.png" alt="logo" className="h-12 invert" />
          <img src="/logo.png" alt="logo" className="h-12 invert" />
        </div>
        <div className="flex flex-col gap-3">
          <p>Join our newsletter to stay up to date on new posts</p>
          <NewsLetterForm background="black" />
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">Connect With Us</h2>
          <ul className="flex flex-col gap-4 md:flex-row">
            <li>
              <a
                href="http://linkedin.com/in/greatochuko123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <i className="fa-brands fa-linkedin mr-2"></i>Linkedin
              </a>
            </li>
            <li>
              <a
                href="http://linkedin.com/in/greatochuko123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <i className="fa-brands fa-twitter mr-2"></i>Twitter
              </a>
            </li>
            <li>
              <a
                href="http://linkedin.com/in/greatochuko123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <i className="fa-brands fa-github mr-2"></i>Github
              </a>
            </li>
            <li>
              <a
                href="http://linkedin.com/in/greatochuko123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <i className="fa-solid fa-laptop mr-2"></i>Website
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-4 text-zinc-500 w-[90%] text-sm max-w-7xl mx-auto">
        &copy;{new Date().getFullYear()} Great Ogheneochuko
      </p>
    </footer>
  );
}
