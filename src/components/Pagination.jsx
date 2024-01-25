import React from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const Pagination = () => {
  return (
    <ol class="flex justify-center gap-2 text-base font-medium mt-6">
      <li>
        <button class="inline-flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded border border-gray-100 bg-white hover:bg-[#009D3C] hover:text-white hover:border-[#009D3C] text-gray-900 rtl:rotate-180">
          <span class="sr-only">Prev Page</span>
          <IoChevronBackSharp />
        </button>
      </li>

      <li>
        <button class="block h-8 w-8 lg:h-10 lg:w-10 rounded border border-gray-100 bg-white hover:bg-[#009D3C] hover:text-white hover:border-[#009D3C] text-center leading-8 text-gray-900">
          1
        </button>
      </li>

      <li>
        <button class="block h-8 w-8 lg:h-10 lg:w-10 rounded border-[#009D3C] bg-[#009D3C] text-center leading-8 text-white">
          2
        </button>
      </li>

      <li>
        <button class="block h-8 w-8 lg:h-10 lg:w-10 rounded border border-gray-100 bg-white hover:bg-[#009D3C] hover:text-white hover:border-[#009D3C] text-center leading-8 text-gray-900">
          3
        </button>
      </li>

      <li>
        <button class="block h-8 w-8 lg:h-10 lg:w-10 rounded border border-gray-100 bg-white hover:bg-[#009D3C] hover:text-white hover:border-[#009D3C] text-center leading-8 text-gray-900">
          4
        </button>
      </li>
      <li>
        <button class="block h-8 w-8 lg:h-10 lg:w-10 rounded border border-gray-100 bg-white hover:bg-[#009D3C] hover:text-white hover:border-[#009D3C] text-center leading-8 text-gray-900">
          ...
        </button>
      </li>
      <li>
        <button class="inline-flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded border border-gray-100 bg-white hover:bg-[#009D3C] hover:text-white hover:border-[#009D3C] text-gray-900 rtl:rotate-180">
          <span class="sr-only">Next Page</span>
          <IoChevronForwardSharp />
        </button>
      </li>
    </ol>
  );
};

export default Pagination;
