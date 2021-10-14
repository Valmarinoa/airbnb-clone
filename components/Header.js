import Image from "next/image";
import airbnb_logo from "../components/media/airbnb_logo.png";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 bg-white md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={airbnb_logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push("/")}
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
      {searchInput && ( //if searchInput is truthy.. only when searchInput is active
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          {" "}
          {/*flex-col by default its a column, everything remain contained within a col -, col-span-3 div spans across X amount of cols*/}
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FE585E"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              className="text-lg w-12 text-red-400 outline-none pl-4"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-400">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
