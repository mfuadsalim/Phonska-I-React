import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logopetro.png";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-md w-full fixed  top-0 left-0 border border-slate-200">
        <div className="md:flex items-center justify-between bg-white md:py-2 py-8 md:px-8 px-6">
          <Link to="/">
            <div className="font-bold  md:text-2xl text-lg flex cursor-pointer items-center font-[Inter] text-[#009D3C]">
              <img
                src={Logo}
                alt="Logo Petrokimia"
                className="md:w-16 w-10 mr-3"
              />
              Monitoring Phonska I
            </div>
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
          >
            {open ? <IoClose /> : <IoMenu />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-800 ease-in ${
              open ? "top-20 opacity-100" : "top-[-500px]"
            } opacity-0 md:opacity-100 `}
          >
            <li className="md:ml-6 text-lg font-semibold font-[Inter] my-4">
              <Link to="/">
                <div className="text-slate-800 hover:text-[#009D3C] duration-500]">
                  Home
                </div>
              </Link>
            </li>
            <li className="md:ml-6 text-lg font-semibold font-[Inter] my-4">
              <Link to="">
                <div className="text-slate-800 hover:text-[#009D3C] duration-500]">
                  About
                </div>
              </Link>
            </li>
            <li className="md:ml-6 text-lg font-semibold font-[Inter] my-4">
              <Link to="/laporan">
                <div className="text-slate-800 hover:text-[#009D3C] duration-500]">
                  Data Laporan
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
