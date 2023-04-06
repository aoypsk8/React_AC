import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let Links = [
    { name: "HOME", link: "/home" },
    { name: "SEARCH", link: "/search" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 md:h-24">
      <div className="h-[100%] md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <Link to={'/home'}
          className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins] 
    text-red-500 hover:text-[38px] transition-all duration-500 ease-in"
        >
          D-Flex Plus
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5  cursor-pointer md:hidden bg-slate-600"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`bg-black  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-white hover:text-red-400 hover:underline  duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
