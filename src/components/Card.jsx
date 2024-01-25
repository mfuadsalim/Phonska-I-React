import React from "react";
import { Link } from "react-router-dom";
import { IoDocumentText } from "react-icons/io5";

const Card = ({ title, content, path }) => {
  const handleClick = () => {
    window.location.href = path;
  };

  return (
    <div
      className="h-max rounded-lg border border-gray-100 mt-2 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 cursor-pointer"
      onClick={handleClick}
    >
      <IoDocumentText className="h-10 w-10 bg-[#009D3C] p-2 text-sm text-white inline-block rounded-md" />
      <h2 className="mt-2 text-lg font-semibold text-gray-900s">{title}</h2>
      <div>{content}</div>
      <Link to={path} className="hidden lg:block">
        <button className="group mt-1 inline-flex items-center gap-1 text-sm lg:text-base font-medium text-[#009D3C]">
          See More
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Card;
