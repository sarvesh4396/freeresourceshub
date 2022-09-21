import { useState } from "react";
import { SITE_VARS } from "../constants/constants";
import Logo from "./logo";

const pages = [
  { name: "Home", href: "/" },
  { name: "Submit Resource", href: SITE_VARS.github_issue },
];
export default function MyNavBar() {
  const [openNav, setOpenNav] = useState(false);

  function dropBar(event) {
    setOpenNav(!openNav);
  }
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {pages.map(function (page) {
        return (
          <li className="p-1 font-normal blue-gray" key={page.name}>
            <a
              href={page.href}
              className="flex items-center hover:text-green-800"
            >
              {page.name}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <Logo />

      <div className="block lg:hidden">
        <button
          className={
            "flex items-center px-3 py-2 border rounded text-blue-900 border-blue-400 hover:text-green-400"
          }
          onClick={dropBar}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          "w-full lg:flex lg:items-center lg:w-auto " +
          (openNav ? " block" : " hidden")
        }
      >
        <div className="text-sm lg:flex-grow">{navList}</div>
      </div>
    </nav>
  );
}
