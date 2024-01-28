import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, icon, path }) => {
  return (
    <Link to={path}>
      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto ">
        {text}
        {icon && <span className="m-1">{icon}</span>}
      </button>
    </Link>
  );
};

export default Button;
