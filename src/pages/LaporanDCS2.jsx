import React from "react";
import { Link } from "react-router-dom";
import {
  IoFunnel,
  IoSearchSharp,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoSend,
} from "react-icons/io5";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const LaporanDCS2 = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-2xl text-slate-900 font-bold font-[Inter]">
              Laporan DCS 2
            </h1>
            <DateCard />
          </div>

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
              <button className="bg-[#1E7653] font-[Inter] text-white py-4 md:py-2 text-lg px-4 flex rounded-lg items-center">
                <span className="hidden md:block">Filter</span>{" "}
                <IoFunnel className="md:ml-2" />
              </button>
            </form>
          </div>
          <div id="Table" className="hidden md:block">
            <table className="w-full rounded-lg overflow-hidden shadow-lg mt-4 border border-[#224038]">
              <thead className="bg-[#224038] text-white font-[Inter] justify-normal">
                <th className="font-semibold w-16 py-4">No</th>
                <th className="font-semibold">Date</th>
                <th className="font-semibold">Time Frame</th>
                <th className="font-semibold">Action</th>
              </thead>
              <tbody className="border border-gray-600">
                <tr className="even:bg-gray-200 text-center font-semibold text-slate-900">
                  <td>1</td>
                  <td>05 Desember 2023</td>
                  <td>00:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>2</td>
                  <td>05 Desember 2023</td>
                  <td>08:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>3</td>
                  <td>05 Desember 2023</td>
                  <td>12.00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>4</td>
                  <td>06 Desember 2023</td>
                  <td>00:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>5</td>
                  <td>06 Desember 2023</td>
                  <td>08:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>6</td>
                  <td>06 Desember 2023</td>
                  <td>12:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>7</td>
                  <td>07 Desember 2023</td>
                  <td>00:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>8</td>
                  <td>07 Desember 2023</td>
                  <td>08:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>9</td>
                  <td>07 Desember 2023</td>
                  <td>12:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="even:bg-[#E5E7EB] text-center font-semibold text-slate-900">
                  <td>10</td>
                  <td>08 Desember 2023</td>
                  <td>00:00</td>
                  <td className="py-4">
                    <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                      <button className="bg-[#009D3C] px-3 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                        Lihat Detail
                        <span className="text-lg">
                          <IoChevronForwardOutline />
                        </span>
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="card" className="md:hidden">
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                05 Desember 2023 - 00:00
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                05 Desember 2023 - 08:00
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                05 Desember 2023 - 12:00
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                06 Desember 2023 - 00:00
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                06 Desember 2023 - 08:00
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporanddcs2/detaillaporandcs2">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
          </div>
          <div
            id="paginate"
            className="flex items-center justify-center gap-2 mt-8"
          >
            <IoChevronBackOutline className="w-10 h-10 shadow-md p-2 bg-white border border-gray-200 rounded-lg md:hover:bg-gray-300" />
            <ul className="inline-flex justify-center gap-2">
              <li>
                <a
                  href="https://play.tailwindcss.com/"
                  className="w-10 h-10 border py-2.5 px-4 rounded-lg border-gray-200 bg-[#1E7653] text-white md:hover:bg-gray-300"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="https://play.tailwindcss.com/"
                  className="w-10 h-10 border py-2.5 px-4 rounded-lg border-gray-200 bg-white md:hover:bg-gray-300"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="https://play.tailwindcss.com/"
                  className="w-10 h-10 border py-2.5 px-4 rounded-lg border-gray-200 bg-white md:hover:bg-gray-300"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="https://play.tailwindcss.com/"
                  className="w-10 h-10 border py-2.5 px-4 rounded-lg border-gray-200 bg-white md:hover:bg-gray-300"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="https://play.tailwindcss.com/"
                  className="w-10 h-10 border py-2.5 px-4 rounded-lg border-gray-200 bg-white md:hover:bg-gray-300"
                >
                  5
                </a>
              </li>
            </ul>
            <IoChevronForwardOutline className="w-10 h-10 shadow-md p-2 bg-white border border-gray-200 rounded-lg md:hover:bg-gray-300" />
          </div>
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default LaporanDCS2;
