import { useState } from "react";
// import { SITE_VARS } from "../constants/constants";
import Logo from "./logo";

const pages = [
  { name: "Home", href: "/" },
  { name: "Submit Resource", href: "/submit_resource" },
];
export default function MyNavBar() {
  const [openNav, setOpenNav] = useState(false);

  function dropBar(event) {
    setOpenNav(!openNav);
  }

  const navList = (
    <ul className="flex gap-7">
      {pages.map((li) => (
        <li className="font-medium text-lg text-slate-100" key={li.name}>
          <a href={li.href} className="flex items-center hover:text-lime-400">
            {li.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="flex items-center justify-between flex-wrap py-6 px-12">
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
