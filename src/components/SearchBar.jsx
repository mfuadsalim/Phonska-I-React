import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between gap-1 items">
      <form className="w-full flex justify-normal gap-1 items-center">
        <input
          type="search"
          class=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#1E7653] focus:ring-[#1E7653]"
          placeholder="Search Here..."
        />
        <button
          type="submit"
          class=" end-0 top-0 h-full rounded-lg border border-[#1E7653] bg-[#1E7653] p-2.5 text-sm font-medium text-white hover:bg-[#1E7653] focus:outline-none focus:ring-4 focus:ring-[#2CB47E] "
        >
          <IoSearchSharp className="text-xl" />
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
