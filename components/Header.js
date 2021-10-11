import Image from "next/image";
import airbnb_logo from "../components/media/airbnb_logo.png";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";

function Header() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 bg-white md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={airbnb_logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-1">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm placeholder-gray-400 text-gray-600"
          placeholder="Start your search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-sm text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex border-2 space-x-2 items-center p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
