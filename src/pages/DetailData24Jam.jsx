import React from "react";
import { Link } from "react-router-dom";
// import { IoCalendarClearOutline } from "react-icons/io5";
import Layout from "./Layout";
import DateCard from "../components/DateCard";

const DetailData24Jam = () => {
  return (
    <Layout>
      <div>
        <div className="md:px-8 px-6 md:py-4 py-8">
          <div className="flex items-center justify-between md:mb-2 mb-8">
            <h1 className="md:text-4xl text-lg text-slate-900 font-bold font-[Inter]">
              Muhammad Fuad Salim
            </h1>
            <DateCard />
          </div>
          <div id="tabel">
            <table className="w-full md:w-3/4 md:mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
              <thead className=" bg-[#224038] text-white">
                <tr>
                  <th className="py-3" colSpan={2}>
                    Detail Data Laporan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white ">
                <tr>
                  <td className="p-4">Supervisor</td>
                  <td className="w-16 px-2 py-4">Fuad</td>
                </tr>
                <tr>
                  <td className="p-4">Foreman Atas</td>
                  <td className="w-16 px-2 py-4">Emil</td>
                </tr>
                <tr>
                  <td className="p-4">Foreman Bawah</td>
                  <td className="w-16 px-2 py-4">Agus</td>
                </tr>
                <tr>
                  <td className="p-4">Grup</td>
                  <td className="w-16 px-2 py-4">Fuad</td>
                </tr>
                <tr>
                  <td className="p-4">Produksi Pupuk</td>
                  <td className="w-16 px-2 py-4">502</td>
                </tr>
                <tr id="garis">
                  <th className="py-2 px-16" colSpan={2}>
                    <hr />
                  </th>
                </tr>
                <tr>
                  <td className="p-4">WQ Pupuk</td>
                  <td className="w-16 px-2 py-4">654</td>
                </tr>
                <tr>
                  <td className="p-4">Produk</td>
                  <td className="w-16 px-2 py-4">987</td>
                </tr>
                <tr>
                  <td className="p-4">MNRT Bahan Baku</td>
                  <td className="w-16 px-2 py-4">87</td>
                </tr>
                <tr>
                  <td className="p-4">KCL</td>
                  <td className="w-16 px-2 py-4">154</td>
                </tr>
                <tr>
                  <td className="p-4">ZA</td>
                  <td className="w-16 px-2 py-4">140</td>
                </tr>
                <tr>
                  <td className="p-4">OFF</td>
                  <td className="w-16 px-2 py-4">244</td>
                </tr>
                <tr>
                  <td className="p-4">UREA</td>
                  <td className="w-16 px-2 py-4">695</td>
                </tr>
                <tr>
                  <td className="p-4">Produksi Pupuk</td>
                  <td className="w-16 px-2 py-4">487</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-center md:mt-6 mt-4">
            <Link to="/laporan/laporan24jam/detaillaporan24jam/hasillaporan">
              <button className="bg-[#009D3C] w-full text-white font-medium py-2 px-4 rounded-lg shadow-md">
                View Laporan
              </button>
            </Link>
            <button className="bg-[#009D3C] text-white font-medium py-2 px-4 rounded-lg shadow-md">
              View Laporan Serah Terima
            </button>
          </div>
        </div>
        <footer className="w-full bg-[#009D3C] text-center text-white p-3 font-[Inter] font-medium mt-6">
          Copyright @2023
        </footer>
      </div>
    </Layout>
  );
};

export default DetailData24Jam;
