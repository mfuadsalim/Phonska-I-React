import React from "react";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline, IoSend } from "react-icons/io5";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const LaporanSerahTerima = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-2xl text-slate-900 font-bold font-[Inter]">
              Laporan Serah Terima
            </h1>
            <DateCard />
          </div>

          <SearchBar />
          <div id="Table" className="hidden md:block">
            <table className="w-full rounded-lg overflow-hidden shadow-lg mt-4 border border-[#224038]">
              <thead className="bg-[#224038] text-white font-[Inter] justify-normal">
                <th className="font-semibold w-16 py-4">No</th>
                <th className="font-semibold">Nama</th>
                <th className="font-semibold">Date</th>
                <th className="font-semibold">Grup</th>
                <th className="font-semibold">Action</th>
              </thead>
              <tbody className="border border-gray-600">
                <tr className="even:bg-gray-200 text-center font-semibold text-slate-900">
                  <td>1</td>
                  <td>Muhammad Fuad</td>
                  <td>05 Desember 2023</td>
                  <td>A</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Fuad Salim</td>
                  <td>04 Desember 2023</td>
                  <td>B</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Muhammad Fuad</td>
                  <td>07 Desember 2023</td>
                  <td>D</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Muhammad Salim</td>
                  <td>08 Desember 2023</td>
                  <td>C</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Muhammad Fuad</td>
                  <td>05 Desember 2023</td>
                  <td>B</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Fuad</td>
                  <td>09 Desember 2023</td>
                  <td>A</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Fuad Salim</td>
                  <td>10 Desember 2023</td>
                  <td>B</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Muhammad Fuad Salim</td>
                  <td>11 Desember 2023</td>
                  <td>A</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Muhammad Fuad</td>
                  <td>13 Desember 2023</td>
                  <td>C</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                  <td>Muhammad Fuad</td>
                  <td>13 Desember 2023</td>
                  <td>B</td>
                  <td className="py-4">
                    <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
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
                Muhammad Fuad - 05 Desember 2023
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                Fuad Salim - 06 Desember 2023
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                Fuad Salim - 07 Desember 2023
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                Muhammad Fuad - 08 Desember 2023
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
            {/* Card */}
            <div className="bg-white rounded-lg shadow-lg md:w-80 w-full md:px-4 md:py-6 p-6 mx-auto mt-4">
              <h1 className="font-bold text-xl md:text-center">
                Fuad Salim - 09 Desember 2023
              </h1>
              <p className=" md:mt-2 mt-4 md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quis ipsum sapiente eligendi quod asperiores?
              </p>
              <Link to="/laporan/laporandserahterima/detaillaporanserahterima">
                <button className="right-0 bg-[#009D3C] md:mx-auto text-white py-2 px-4 font-medium font-[Inter] rounded-lg flex items-center mt-4">
                  Lihat Laporan <IoSend className="ml-2" />
                </button>
              </Link>
            </div>
            {/* Card  */}
          </div>
          <Pagination />
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default LaporanSerahTerima;
