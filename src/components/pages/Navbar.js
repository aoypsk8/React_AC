import React from "react";
import { BsSearch, BsListCheck } from "react-icons/bs";
import { AiFillHome, AiFillHeart } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="px-12 pt-7 pb-6 bg-black">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <p className="text-red-700 text-4xl font-black hover:cursor-pointer hover:text-[37.8px] duration-1000 ">
            D-Flix plus
          </p>
        </div>
        {/* Menu and profile */}
        <div className="flex justify-center relative">
          {/* menu */}
          <div className="text-white flex justify-center">
            <div className="flex justify-center pr-10 hover:cursor-pointer  hover:text-red-700 hover:underline  duration-1000  ">
              <AiFillHome className="w-[21px] h-[21px] mt-1" />
              <p className="pl-2 text-lg ">Home</p>
            </div>
            <div className="flex justify-center pr-10 hover:cursor-pointer hover:text-red-700 hover:underline duration-1000">
              <BsSearch className="w-[21px] h-[21px] mt-1" />
              <p className="pl-2 text-lg">Search</p>
            </div>
            <div className="flex justify-center pr-10 hover:cursor-pointer hover:text-red-700 hover:underline duration-1000">
              <BsListCheck className="w-[21px] h-[21px] mt-1" />
              <p className="pl-2 text-lg">Watch List</p>
            </div>
            <div className="flex justify-center pr-16 hover:cursor-pointer hover:text-red-700 hover:underline duration-1000">
              <AiFillHeart className="w-[21px] h-[21px] mt-1" />
              <p className="pl-2 text-lg">Favorites</p>
            </div>
            {/* Profile */}
            <div className="flex ml-9 hover:cursor-pointer">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                class="rounded-full shadow-lg w-[60px] h-[60px] absolute  top-[-20px]  right-[0px]"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
