import React from "react";

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <button
      className="group mt-1 inline-flex items-center gap-1 text-sm lg:text-2xl font-semibold text-slate-800 hover:text-[#009D3C]"
      onClick={goBack}
    >
      <span
        aria-hidden="true"
        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        &larr;
      </span>
      Back
    </button>
  );
};

export default BackButton;
