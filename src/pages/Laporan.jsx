import React from "react";
import { Link } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const Laporan = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-2xl text-slate-900 font-bold font-[Inter]">
              Data Laporan
            </h1>
            <DateCard />
          </div>
          {/* Cards */}
          <div className="md:grid md:grid-cols-4 md:gap-2 md:justify-normal">
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan 24 Jam
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporan24jam">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan 8 Jam
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporan8jam">
                <button className="bg-[#009D3C] text-white py-2 md:mx-auto px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan Coating Oil
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporancoatingoil">
                <button className="bg-[#009D3C] text-white py-2 md:mx-auto px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan DCS 1
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandcs1">
                <button className="bg-[#009D3C] text-white py-2 md:mx-auto px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan Finishing
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanfinishing">
                <button className="bg-[#009D3C] text-white py-2 md:mx-auto px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan Maintenance
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanmaintenance">
                <button className="bg-[#009D3C] text-white md:mx-auto py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan Live Report
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanlivereport">
                <button className="bg-[#009D3C] text-white py-2 md:mx-auto px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan Scrubbing
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanscrubbing">
                <button className="bg-[#009D3C] text-white md:mx-auto py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan DCS 2
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandcs2">
                <button className="bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold md:text-xl text-3xl md:text-center">
                Laporan Serah Terima
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandserahterima">
                <button className="bg-[#009D3C] text-white py-2 px-4 md:mx-auto font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
          </div>
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default Laporan;
